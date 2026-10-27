"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowUpRight, ArrowRight, MapPin, Phone, Mail, Paperclip, ChevronDown } from "lucide-react";
import { COUNTRIES } from "@/data/countries";
import { generateLocalBusinessSchema } from "@/lib/jsonLd";
import styles from "./Contact.module.css";

/* ─────────────────────────────────────────────────────
   COUNTRIES
───────────────────────────────────────────────────── */

const API_URL = (process.env.NEXT_PUBLIC_API_URL || "").replace(/\/$/, "");
const MAX_FILE_SIZE = 10 * 1024 * 1024;

const COMMON_FIELDS = ["fullName", "emailAddress", "phone", "messageBrief", "imageUrl"];

// formType value per tab + the fields the API receives for it.
// `required` lists the fields the UI marks with *.
const FORM_CONFIG = {
  work: {
    formType: "WORK_ENQUIRY",
    fields: [...COMMON_FIELDS, "companyBrandName", "designationRole", "serviceInterested", "budget", "projectTimelineExpectedStart"],
    required: ["fullName", "companyBrandName", "designationRole", "emailAddress", "phone", "serviceInterested", "budget", "projectTimelineExpectedStart", "messageBrief"],
  },
  support: {
    formType: "CUSTOMER_SUPPORT",
    fields: [...COMMON_FIELDS, "clientId", "serviceInterested", "typeOfIssue"],
    required: ["fullName", "clientId", "serviceInterested", "emailAddress", "phone", "typeOfIssue", "messageBrief"],
  },
  partner: {
    formType: "PARTNERSHIP",
    fields: [...COMMON_FIELDS, "companyBrandName", "designationRole", "partnershipType", "existingClientsOrKeyMarkets", "websitePortfolio"],
    required: ["fullName", "companyBrandName", "designationRole", "emailAddress", "phone", "partnershipType", "existingClientsOrKeyMarkets", "messageBrief"],
  },
};

const INITIAL_FORM = {
  fullName: "",
  companyBrandName: "",
  designationRole: "",
  emailAddress: "",
  phoneDial: "+91",
  phone: "",
  serviceInterested: "",
  budget: "",
  projectTimelineExpectedStart: "",
  messageBrief: "",
  imageUrl: "",
  clientId: "",
  typeOfIssue: "",
  partnershipType: "",
  existingClientsOrKeyMarkets: "",
  websitePortfolio: "",
};

/* ─────────────────────────────────────────────────────
   PHONE FIELD
───────────────────────────────────────────────────── */
function PhoneField({ onChange, value, dial, onDialChange }) {
  const [selected, setSelected] = useState(
    () => (COUNTRIES.find((c) => c.dial === dial) || COUNTRIES[0]).code
  );
  const country =
    COUNTRIES.find((c) => c.code === selected && c.dial === dial) ||
    COUNTRIES.find((c) => c.dial === dial) ||
    COUNTRIES[0];
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const ref = useRef(null);
  const q = query.trim().toLowerCase();
  const visible = q
    ? COUNTRIES.filter(
        (c) => c.name.toLowerCase().includes(q) || c.dial.includes(q.replace(/^\+?/, "+")) || c.code.toLowerCase() === q
      )
    : COUNTRIES;

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className={styles.fieldGroup}>
      <label className={styles.label}>
        Phone Number <span className={styles.req}>*</span>
      </label>
      <div className={styles.phoneRow}>
        <div ref={ref} className={styles.flagWrap}>
          <button type="button" className={`${styles.flagBtn}`} onClick={() => { setOpen(!open); setQuery(""); }} aria-haspopup="listbox" aria-expanded={open}>
            <span>{country.flag}</span>
            <span>{country.dial}</span>
            <ChevronDown size={13} />
          </button>
          {open && (
            <div className={styles.dropdown}>
              <input
                type="text"
                className={styles.dropdownSearch}
                placeholder="Search country or code"
                aria-label="Search country"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                ref={(el) => el && el.focus({ preventScroll: true })}
              />
              <div className={styles.dropdownList}>
              {visible.map((c) => (
                <button
                  key={c.code}
                  type="button"
                  className={`${styles.dropdownItem} ${c.code === country.code ? styles.dropdownItemActive : ""}`}
                  onClick={() => {
                    setSelected(c.code);
                    onDialChange(c.dial);
                    setOpen(false);
                  }}
                >
                  <span>{c.flag}</span>
                  <span className={styles.dropdownName}>{c.name}</span>
                  <span>{c.dial}</span>
                </button>
              ))}
              {visible.length === 0 && <p className={styles.dropdownEmpty}>No results</p>}
              </div>
            </div>
          )}
        </div>

        <input
          type="tel"
          name="phone"
          placeholder="Phone number"
          className={`${styles.input} ${styles.phoneInput}`}
          onChange={onChange}
          value={value}
        />
      </div>
    </div>
  );
}


/* ─────────────────────────────────────────────────────
   FIELD
───────────────────────────────────────────────────── */
function Field({
  label,
  name,
  required,
  placeholder,
  type = "text",
  full = false,
  onChange,
  value,
}) {
  return (
    <div className={`${styles.fieldGroup} ${full ? styles.fieldFull : styles.fieldHalf}`}>
      <label className={styles.label}>
        {label} {required && <span className={styles.req}>*</span>}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={styles.input}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────
   TEXTAREA
───────────────────────────────────────────────────── */
function TextArea({ label, name, required, placeholder, onChange, value }) {
  return (
    <div className={`${styles.fieldGroup} ${styles.fieldFull}`}>
      <label className={styles.label}>
        {label} {required && <span className={styles.req}>*</span>}
      </label>
      <textarea
        name={name}
        placeholder={placeholder}
        className={styles.textarea}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────
   FILE UPLOAD
───────────────────────────────────────────────────── */
function FileUpload({ label, setImageUrl, setUploading }) {
  const [fileName, setFileName] = useState(null);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > MAX_FILE_SIZE) {
      setError("File is larger than 10 MB.");
      e.target.value = "";
      return;
    }

    setError("");
    setFileName(file.name);
    setLoading(true);
    setUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch(`${API_URL}/s3/upload`, {
        method: "POST",
        body: formData,
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) throw new Error(data.message || "Upload failed");

      const url = data.url || data.imageUrl || data.location || data.fileUrl;
      if (!url) throw new Error("Upload succeeded but no file URL was returned");

      setImageUrl(url);
    } catch (err) {
      console.error("Upload failed:", err);
      setFileName(null);
      setImageUrl("");
      setError(err.message || "File upload failed");
    } finally {
      setLoading(false);
      setUploading(false);
    }
  };

  return (
    <div className={styles.fieldFull}>
      <label className={styles.fileUpload}>
        <Paperclip size={20} className={styles.fileIcon} />
        <div>
          <p className={styles.fileUploadTitle}>
            {loading ? "Uploading..." : fileName || label}
          </p>
          <p className={styles.fileUploadMeta}>
            Max 10 MB · pdf, doc, png, jpeg, docx
          </p>
          {error && <p className={styles.fileUploadMeta} style={{ color: "#dc3545" }}>{error}</p>}
        </div>
        <input type="file" hidden onChange={handleFileChange} />
      </label>
    </div>
  );
}
/* ─────────────────────────────────────────────────────
   PHONE FIELD HALF WRAPPER
───────────────────────────────────────────────────── */
function PhoneFieldHalf({ onChange, value, dial, onDialChange }) {
  return (
    <div className={styles.fieldHalf}>
      <PhoneField onChange={onChange} value={value} dial={dial} onDialChange={onDialChange} />
    </div>
  );
}

/* ─────────────────────────────────────────────────────
   SUBMIT BUTTON
───────────────────────────────────────────────────── */
function SubmitBtn({ label = "Submit Inquiry", onClick, disabled, loading, status }) {
  return (
    <div className={`${styles.fieldFull} ${styles.submitWrap}`}>
      {status && (
        <p
          role="status"
          style={{ margin: "0 0 12px", color: status.type === "error" ? "#dc3545" : "#28a745" }}
        >
          {status.message}
        </p>
      )}
      <button type="button" className={styles.submitBtn} onClick={onClick} disabled={disabled}>
        {loading ? "Submitting..." : label}
        <span className={styles.submitArrow}>
          <ArrowUpRight size={16} />
        </span>
      </button>
    </div>
  );
}

/* ─────────────────────────────────────────────────────
   FORM PANELS
───────────────────────────────────────────────────── */
function WorkEnquiryForm({ formData, handleChange, handleSubmit, setImageUrl, setPhoneDial, submitting, status, uploading, setUploading }) {
  return (
    <div className={styles.formGrid}>

      <Field label="Full Name" name="fullName" required placeholder="Enter your full name" onChange={handleChange} value={formData.fullName} />
      <Field label="Company / Brand Name" name="companyBrandName" required placeholder="Enter your company name" onChange={handleChange} value={formData.companyBrandName} />
      <Field label="Designation / Role" name="designationRole" required placeholder="Enter your designation" onChange={handleChange} value={formData.designationRole} />
      <Field label="Email Address" name="emailAddress" type="email" required placeholder="Enter your email address" onChange={handleChange} value={formData.emailAddress} />

      <PhoneFieldHalf onChange={handleChange} value={formData.phone} dial={formData.phoneDial} onDialChange={setPhoneDial} />

      <Field label="Service Interested In" name="serviceInterested" required placeholder="e.g., Web Development" onChange={handleChange} value={formData.serviceInterested} />
      <Field label="Project Budget Range" name="budget" required placeholder="e.g., $5,000 – $10,000" onChange={handleChange} value={formData.budget} />

      <Field label="Project Timeline / Expected Start Date" name="projectTimelineExpectedStart" required full placeholder="Next Month" onChange={handleChange} value={formData.projectTimelineExpectedStart} />

      <TextArea label="Message" name="messageBrief" required placeholder="Describe your project..." onChange={handleChange} value={formData.messageBrief} />

      <FileUpload
        label="Add an attachment (Optional)"
        setImageUrl={setImageUrl}
        setUploading={setUploading}
      />

      <SubmitBtn onClick={handleSubmit} disabled={submitting || uploading} loading={submitting} status={status} />

    </div>
  );
}
// function PeopleTalentForm() {
//   return (
//     <div className={styles.formGrid}>
//       <Field label="Full Name"                  required placeholder="Enter your full name"                    />
//       <Field label="Email Address"              required placeholder="Enter your email address" type="email"   />
//       <Field label="Current Role / Title"       required placeholder="e.g., Senior Designer, Full-Stack Dev"  />
//       <Field label="LinkedIn Profile"                    placeholder="https://linkedin.com/in/yourprofile" type="url" />
//       <Field label="Skills / Area of Expertise" required placeholder="e.g., Branding, Motion, React, Strategy" />
//       <Field label="Portfolio / Website URL"             placeholder="https://yourportfolio.com" type="url"   />
//       <Field label="Availability"               required placeholder="e.g., Immediate, 2 weeks notice"        />
//       <Field label="Preferred Engagement Type"  required placeholder="e.g., Full-time, Freelance, Internship" />
//       <TextArea label="Brief Introduction / Cover Note" required placeholder="Tell us a little about yourself, what drives you, and why Palqar…" />
//       <FileUpload label="Attach Resume / CV (Optional)" />
//       <SubmitBtn label="Submit Application" />
//     </div>
//   );
// }

function CustomerSupportForm({ formData, handleChange, handleSubmit, setImageUrl, setPhoneDial, submitting, status, uploading, setUploading }) {
  return (
    <div className={styles.formGrid}>

      <Field label="Full Name" name="fullName" required full placeholder="Enter your full name" onChange={handleChange} value={formData.fullName} />

      <Field label="Registered Email / Client ID" name="clientId" required placeholder="Enter your email or Client ID" onChange={handleChange} value={formData.clientId} />

      <Field label="Project / Service Name" name="serviceInterested" required placeholder="Enter project name" onChange={handleChange} value={formData.serviceInterested} />

      <Field label="Email Address" name="emailAddress" type="email" required placeholder="Enter your email" onChange={handleChange} value={formData.emailAddress} />

      <PhoneFieldHalf onChange={handleChange} value={formData.phone} dial={formData.phoneDial} onDialChange={setPhoneDial} />

      <Field label="Type of Issue" name="typeOfIssue" required full placeholder="Technical, Billing..." onChange={handleChange} value={formData.typeOfIssue} />

      <TextArea label="Description of Issue" name="messageBrief" required placeholder="Describe issue..." onChange={handleChange} value={formData.messageBrief} />

      <FileUpload label="Upload Screenshots / Files (Optional)" setImageUrl={setImageUrl} setUploading={setUploading} />

      <SubmitBtn onClick={handleSubmit} disabled={submitting || uploading} loading={submitting} status={status} />

    </div>
  );
}
function PartnershipForm({ formData, handleChange, handleSubmit, setImageUrl, setPhoneDial, submitting, status, uploading, setUploading }) {
  return (
    <div className={styles.formGrid}>

      <Field label="Full Name" name="fullName" required placeholder="Enter your full name" onChange={handleChange} value={formData.fullName} />
      <Field label="Company / Organization Name" name="companyBrandName" required placeholder="Enter your company name" onChange={handleChange} value={formData.companyBrandName} />
      <Field label="Designation / Role" name="designationRole" required placeholder="Enter your role" onChange={handleChange} value={formData.designationRole} />
      <Field label="Email Address" name="emailAddress" type="email" required placeholder="Enter your email" onChange={handleChange} value={formData.emailAddress} />

      <PhoneFieldHalf onChange={handleChange} value={formData.phone} dial={formData.phoneDial} onDialChange={setPhoneDial} />

      <Field label="Partnership Type" name="partnershipType" required placeholder="Agency, Tech Partner..." onChange={handleChange} value={formData.partnershipType} />

      <Field label="Existing Clients or Key Markets" name="existingClientsOrKeyMarkets" required placeholder="Enter markets" onChange={handleChange} value={formData.existingClientsOrKeyMarkets} />

      <Field label="Website / Portfolio" name="websitePortfolio" placeholder="https://..." onChange={handleChange} value={formData.websitePortfolio} />

      <TextArea label="Objective of Partnership" name="messageBrief" required placeholder="Describe goal..." onChange={handleChange} value={formData.messageBrief} />

      <FileUpload label="Add Supporting Documents (Optional)" setImageUrl={setImageUrl} setUploading={setUploading} />

      <SubmitBtn onClick={handleSubmit} disabled={submitting || uploading} loading={submitting} status={status} />

    </div>
  );
}
/* ─────────────────────────────────────────────────────
   TABS CONFIG
───────────────────────────────────────────────────── */
const TABS = [
  {
    id: "work",
    label: "Work Enquiry",
    desc: "For businesses or brands wanting to collaborate or request a proposal",
    Form: WorkEnquiryForm,
  },
  // {
  //   id: "talent",
  //   label: "People & Talent",
  //   desc: "For individuals looking to join our team or collaborate as freelancers",
  //   Form: PeopleTalentForm,
  // },
  {
    id: "support",
    label: "Customer Support",
    desc: "For existing clients seeking assistance with ongoing projects",
    Form: CustomerSupportForm,
  },
  {
    id: "partner",
    label: "Partnership",
    desc: "For agencies, studios, tech partners, and innovators who want to collaborate with us",
    Form: PartnershipForm,
  },
];

/* ─────────────────────────────────────────────────────
   CONTACT DETAIL
───────────────────────────────────────────────────── */
function ContactDetail({ icon, label, value }) {
  return (
    <div className={styles.contactDetail}>
      <div className={styles.contactDetailLabel}>
        {icon}
        <span className={styles.contactDetailText}>{label}</span>
      </div>

      <p className={styles.contactDetailValue}>{value}</p>
    </div>
  );
}

/* ─────────────────────────────────────────────────────
   LOCATION SECTION
───────────────────────────────────────────────────── */
function LocationSection() {
  return (
    <section className={styles.locationSection}>
      <div className={styles.sectionLabel}>
        <div className={styles.labelLine} />
        <span className={styles.labelText}>Where To Find Us</span>
      </div>

      <div className={styles.locationCard}>
        {/* Info */}
        <div className={styles.locationInfo}>
          <div className={styles.locationNameRow}>
            <div className={styles.locationIcon}>
              <MapPin size={20} color="#dc3545" />
            </div>
            <h3 className={styles.locationName}>STS Arcade Calicut</h3>
          </div>

          <p className={styles.locationAddress}>
            Palqar<br />
            2nd floor, STS Arcade, PO, Balan K Nair Rd, near Bramakumari,<br />
            Kozhikode, Kerala 673001
          </p>

          <div className={styles.locationDivider} />

          <div className={styles.contactGrid}>
            <ContactDetail icon={<Phone size={16} />} label="Contact HR"    value="+91 09995498218" />
            <ContactDetail icon={<Phone size={16} />} label="Contact Sales" value="+91 09995498218" />
            <ContactDetail icon={<Mail  size={16} />} label="Email HR"      value="hr@palqar.com"   />
            <ContactDetail icon={<Mail  size={16} />} label="Email Sales"   value="info@palqar.com" />
          </div>
        </div>

        {/* Map */}
        <div className={styles.mapWrapper}>
          <iframe
            title="Palqar Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.9470331806524!2d75.7807444744938!3d11.265303949987159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65988f5fc9d1d%3A0x87bffcb144827fcf!2sParasya%20Technologies!5e0!3m2!1sen!2sin!4v1772437971239!5m2!1sen!2sin"
            className={styles.mapIframe}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────────────── */


export default function Contact() {
  const [activeTab, setActiveTab] = useState("work");
  const current = TABS.find((t) => t.id === activeTab);
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const setPhoneDial = (dial) => setFormData((prev) => ({ ...prev, phoneDial: dial }));
  const setImageUrl = (url) => setFormData((prev) => ({ ...prev, imageUrl: url }));

  const switchTab = (id) => {
    setActiveTab(id);
    setStatus(null);
  };

  const handleSubmit = async () => {
    const config = FORM_CONFIG[activeTab];

    const missing = config.required.some((f) => !String(formData[f]).trim());
    if (missing) {
      setStatus({ type: "error", message: "Please fill in all required fields." });
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.emailAddress.trim())) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }

    // Only send fields that belong to the active form and are non-empty.
    const payload = { formType: config.formType };
    for (const field of config.fields) {
      const value = String(formData[field]).trim();
      if (value) payload[field] = value;
    }
    payload.phone = `${formData.phoneDial} ${formData.phone.trim()}`;

    setSubmitting(true);
    setStatus(null);

    try {
      const res = await fetch(`${API_URL}/contact-forms`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        const message = Array.isArray(err.message) ? err.message.join(", ") : err.message;
        setStatus({ type: "error", message: message || "Submission failed. Please try again." });
        return;
      }

      setStatus({ type: "success", message: "Thanks! Your enquiry has been submitted. We will reply within 24 hours." });
      setFormData(INITIAL_FORM);
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus({ type: "error", message: "Something went wrong. Please check your connection and try again." });
    } finally {
      setSubmitting(false);
    }
  };

  // ─── LocalBusiness JSON-LD ──────────────────────────────────────────────────
  const contactSchema = {
    "@context": "https://schema.org",
    ...generateLocalBusinessSchema(),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://palqar.com" },
      { "@type": "ListItem", position: 2, name: "Contact", item: "https://palqar.com/contact" },
    ],
  };

  return (
    <main className={styles.contactPage}>
      {/* ── JSON-LD STRUCTURED DATA ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── HEADER ── */}
      <header className={styles.header}>
        <div className={styles.headerInner}>

          <div className={styles.titleBlock}>
            <div className={styles.sectionLabel}>
              <div className={styles.labelLine} />
              <span className={styles.labelText}>Contact</span>
            </div>
            <h1 className={styles.title}>
              No Frills,<br />
              <span className={styles.titleAccent}>No Fluff.</span>
            </h1>
          </div>

          <div className={styles.headerMeta}>
            <p className={styles.headerDesc}>
              Real conversations,<br />
              honest timelines,<br />
              and work that ships.
            </p>
            <div className={styles.responseTime}>
              <span className={styles.responseNumber}>24h</span>
              <span className={styles.responseLabel}>Response Time</span>
            </div>
          </div>

        </div>
        <div className={styles.headerDivider} />
      </header>

      {/* ── FORM SECTION ── */}
      <section id="contact-form" className={styles.formSection}>

        {/* Tabs */}
        <div className={styles.tabs}>
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`${styles.tab} ${activeTab === tab.id ? styles.tabActive : ""}`}
              onClick={() => switchTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Panel */}
        <div className={styles.panel}>
          <div className={styles.panelHeader}>
            <p className={styles.panelTag}>{current.label}</p>
            <p className={styles.panelDesc}>{current.desc}</p>
          </div>
          <div key={activeTab} className={styles.panelBody}>
            <current.Form
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              setImageUrl={setImageUrl}
              setPhoneDial={setPhoneDial}
              submitting={submitting}
              uploading={uploading}
              setUploading={setUploading}
              status={status}
            />
          </div>
        </div>

      </section>

      {/* ── LOCATION ── */}
      <div className={styles.sectionDivider} />
      <LocationSection />

      {/* ── CTA ── */}
      <section
        className={styles.initiateProject}
        aria-label="Start a project"
      >
        <div className={styles.column}>
          <p className={styles.lets}>
            LET&apos;S <span className={styles.talk}>TALK</span>
          </p>
          <div className={styles.buttonWrapper}>
            <button aria-label="Start a project with Palqar">START A PROJECT</button>
            <div className={styles.arrowRight} aria-hidden="true">
              <ArrowRight />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}