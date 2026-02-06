"use client";

type FormAlertProps = {
  type: "success" | "error";
  title: string;
  children?: React.ReactNode;
};

/** Accessible alert banner for form success/error states. */
export default function FormAlert({ type, title, children }: FormAlertProps) {
  const styles =
    type === "success"
      ? "border-green-500/30 bg-green-50 text-green-800"
      : "border-brand-red/30 bg-red-50 text-red-800";

  return (
    <div
      role="alert"
      aria-live="polite"
      className={`rounded-xl border p-6 ${styles}`}
    >
      <p className="font-semibold">{title}</p>
      {children && <div className="mt-2 text-sm opacity-80">{children}</div>}
    </div>
  );
}
