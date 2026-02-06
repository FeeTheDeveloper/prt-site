"use client";

import { FormEvent, useState } from "react";
import Field from "@/components/forms/Field";
import Select from "@/components/forms/Select";
import Toggle from "@/components/forms/Toggle";
import FormAlert from "@/components/forms/FormAlert";

/* ── Constants ── */

const ROLES = ["I'm a Shipper", "I'm a Carrier"] as const;

const EQUIPMENT_OPTIONS = [
  { label: "Dry Van", value: "dry-van" },
  { label: "Reefer", value: "reefer" },
  { label: "Flatbed", value: "flatbed" },
  { label: "Other", value: "other" },
];

const LOAD_TYPE_OPTIONS = [
  { label: "FTL", value: "ftl" },
  { label: "LTL", value: "ltl" },
];

type Status = "idle" | "submitting" | "success" | "error";

type ContactFormProps = {
  /** Pre-select the role toggle (e.g. from URL param) */
  defaultRole?: "shipper" | "carrier";
};

export default function ContactForm({ defaultRole }: ContactFormProps) {
  /* ── State ── */
  const [role, setRole] = useState<string>(
    defaultRole === "carrier" ? ROLES[1] : ROLES[0]
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  // Honeypot
  const [companyWebsite, setCompanyWebsite] = useState("");

  // Shipper-specific
  const [originCity, setOriginCity] = useState("");
  const [destinationCity, setDestinationCity] = useState("");
  const [equipmentType, setEquipmentType] = useState("");
  const [loadType, setLoadType] = useState("");
  const [pickupDate, setPickupDate] = useState("");

  // Carrier-specific
  const [mcDot, setMcDot] = useState("");
  const [carrierEquipment, setCarrierEquipment] = useState("");
  const [preferredLanes, setPreferredLanes] = useState("");

  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const isShipper = role === ROLES[0];
  const subject = isShipper ? "Quote Request" : "Carrier Partnership";

  /* ── Submit ── */
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const payload: Record<string, string> = {
      role,
      subject,
      name,
      email,
      phone,
      company,
      message,
      companyWebsite, // honeypot
    };

    if (isShipper) {
      Object.assign(payload, {
        originCity,
        destinationCity,
        equipmentType,
        loadType,
        pickupDate,
      });
    } else {
      Object.assign(payload, {
        mcDot,
        carrierEquipment,
        preferredLanes,
      });
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(
          (data as { error?: string }).error || "Something went wrong. Please try again."
        );
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  }

  /* ── Success state ── */
  if (status === "success") {
    return (
      <FormAlert type="success" title="Message received — thank you!">
        <p>
          We&apos;ll respond within <strong>1 business day</strong>. If you need
          immediate assistance, email us at{" "}
          <a
            href="mailto:contact@prtlogisticsandfreight.com"
            className="font-medium underline underline-offset-2"
          >
            contact@prtlogisticsandfreight.com
          </a>
          .
        </p>
      </FormAlert>
    );
  }

  /* ── Form ── */
  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8">
      {/* Error banner */}
      {status === "error" && (
        <FormAlert type="error" title="Submission failed">
          <p>{errorMsg}</p>
        </FormAlert>
      )}

      {/* Role toggle */}
      <div className="flex justify-center sm:justify-start">
        <Toggle options={[ROLES[0], ROLES[1]]} value={role} onChange={setRole} />
      </div>

      {/* ── Core fields (2-col desktop) ── */}
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Full Name"
          name="name"
          required
          placeholder="Jane Smith"
          value={name}
          onChange={setName}
          autoComplete="name"
        />
        <Field
          label="Email"
          name="email"
          type="email"
          required
          placeholder="jane@company.com"
          value={email}
          onChange={setEmail}
          autoComplete="email"
        />
        <Field
          label="Phone"
          name="phone"
          type="tel"
          placeholder="(555) 555-5555"
          value={phone}
          onChange={setPhone}
          autoComplete="tel"
        />
        <Field
          label="Company"
          name="company"
          placeholder="Company name"
          value={company}
          onChange={setCompany}
          autoComplete="organization"
        />
      </div>

      {/* Subject (auto-set, read-only display) */}
      <div>
        <p className="text-sm font-medium text-brand-navy">
          Subject:{" "}
          <span className="font-normal text-brand-deep/70">{subject}</span>
        </p>
      </div>

      {/* ── Shipper-specific fields ── */}
      {isShipper && (
        <fieldset className="space-y-5 rounded-xl border border-brand-navy/8 bg-brand-light/50 p-5">
          <legend className="text-sm font-semibold uppercase tracking-widest text-brand-red">
            Shipment Details
          </legend>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              label="Origin City / State"
              name="originCity"
              placeholder="Houston, TX"
              value={originCity}
              onChange={setOriginCity}
            />
            <Field
              label="Destination City / State"
              name="destinationCity"
              placeholder="Atlanta, GA"
              value={destinationCity}
              onChange={setDestinationCity}
            />
            <Select
              label="Equipment Type"
              name="equipmentType"
              options={EQUIPMENT_OPTIONS}
              value={equipmentType}
              onChange={setEquipmentType}
            />
            <Select
              label="Load Type"
              name="loadType"
              options={LOAD_TYPE_OPTIONS}
              value={loadType}
              onChange={setLoadType}
            />
            <Field
              label="Preferred Pickup Date"
              name="pickupDate"
              type="date"
              value={pickupDate}
              onChange={setPickupDate}
            />
          </div>
        </fieldset>
      )}

      {/* ── Carrier-specific fields ── */}
      {!isShipper && (
        <fieldset className="space-y-5 rounded-xl border border-brand-navy/8 bg-brand-light/50 p-5">
          <legend className="text-sm font-semibold uppercase tracking-widest text-brand-red">
            Carrier Details
          </legend>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              label="MC / DOT Number"
              name="mcDot"
              placeholder="MC-123456"
              value={mcDot}
              onChange={setMcDot}
            />
            <Select
              label="Equipment Type"
              name="carrierEquipment"
              options={EQUIPMENT_OPTIONS}
              value={carrierEquipment}
              onChange={setCarrierEquipment}
            />
          </div>
          <Field
            label="Preferred Lanes"
            name="preferredLanes"
            placeholder="e.g. TX → GA, Midwest regional"
            value={preferredLanes}
            onChange={setPreferredLanes}
          />
        </fieldset>
      )}

      {/* Message */}
      <Field
        label="Message"
        name="message"
        required
        multiline
        rows={5}
        placeholder={
          isShipper
            ? "Tell us about your freight needs…"
            : "Tell us about your fleet and capacity…"
        }
        value={message}
        onChange={setMessage}
      />

      {/* Honeypot (hidden) */}
      <Field
        label="Company Website"
        name="companyWebsite"
        hidden
        value={companyWebsite}
        onChange={setCompanyWebsite}
        autoComplete="off"
      />

      {/* Actions */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center rounded-lg bg-brand-red px-8 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-red/90 hover:shadow-brand-glow-red disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? (
            <>
              <svg
                className="-ml-1 mr-2 h-4 w-4 animate-spin"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              Sending…
            </>
          ) : (
            "Send Message"
          )}
        </button>

        <a
          href="mailto:contact@prtlogisticsandfreight.com"
          className="text-sm font-medium text-brand-navy/70 transition-colors hover:text-brand-navy"
        >
          or email contact@prtlogisticsandfreight.com
        </a>
      </div>
    </form>
  );
}
