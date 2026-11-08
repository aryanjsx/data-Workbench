/**
 * Runtime environment configuration, resolved once at module load.
 *
 * Required variables are validated eagerly and throw immediately if
 * missing, instead of silently falling back to a localhost default
 * that would mask misconfiguration in non-local environments.
 */
function requireEnvVar(name: string, value: string | undefined): string {
  if (!value || value.trim() === "") {
    throw new Error(
      `Missing required environment variable "${name}". Set it in .env.local (see .env.example).`
    );
  }
  return value;
}

const apiBaseUrl =
  process.env.NEXT_PUBLIC_API_BASE_URL ??
  (process.env.NODE_ENV === "production"
    ? "https://backend-eta-rust-52.vercel.app/api/v1"
    : undefined);

export const env = {
  apiBaseUrl: requireEnvVar("NEXT_PUBLIC_API_BASE_URL", apiBaseUrl),
} as const;
