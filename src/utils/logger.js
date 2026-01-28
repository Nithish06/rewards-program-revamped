const isDev = process.env.NODE_ENV !== "production";

const formatMessage = (level, message, meta) => {
  const timestamp = new Date().toISOString();

  return {
    timestamp,
    level,
    message,
    ...(meta && { meta })
  };
};

export const logger = {
  info(message, meta = null) {
    if (!isDev) return;
    console.info(formatMessage("INFO", message, meta));
  },

  warn(message, meta = null) {
    if (!isDev) return;
    console.warn(formatMessage("WARN", message, meta));
  },

  error(message, meta = null) {
    if (!isDev) return;
    console.error(formatMessage("ERROR", message, meta));
  },

  debug(message, meta = null) {
    if (!isDev) return;
    console.debug(formatMessage("DEBUG", message, meta));
  }
};
