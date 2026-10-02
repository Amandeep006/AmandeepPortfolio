import React from 'react';

// Specialized SVG Icons for all 22 Tech Skills

export function PythonIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.927 0C5.642 0 6.033 2.738 6.033 2.738l.006 2.836h5.99v.85H3.593C.687 6.424 0 8.351 0 11.238c0 2.888 2.535 2.784 2.535 2.784h1.512v-2.13s-.08-2.536 2.497-2.536h4.295s2.378.04 2.378-2.31V2.428S13.792 0 11.927 0zm-3.03 1.8c.47 0 .85.38.85.85 0 .47-.38.85-.85.85a.852.852 0 01-.85-.85c0-.47.38-.85.85-.85z" fill="#3776AB" />
      <path d="M12.073 24c6.285 0 5.894-2.738 5.894-2.738l-.006-2.837h-5.99v-.849h8.441c2.906 0 3.593-1.927 3.593-4.814 0-2.888-2.535-2.784-2.535-2.784h-1.512v2.13s.08 2.536-2.497 2.536h-4.295s-2.378-.04-2.378 2.31v4.615S10.208 24 12.073 24zm3.03-1.8a.852.852 0 01-.85-.85c0-.47.38-.85.85-.85.47 0 .85.38.85.85 0 .47-.38.85-.85.85z" fill="#FFD43B" />
    </svg>
  );
}

export function SqlIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <ellipse cx="12" cy="5" rx="9" ry="3" stroke="#A855F7" fill="#8B5CF6" fillOpacity="0.2" />
      <path d="M21 5v14c0 1.66-4.03 3-9 3s-9-1.34-9-3V5" stroke="#8B5CF6" />
      <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" stroke="#3B82F6" />
    </svg>
  );
}

export function PowerBiIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <rect x="3" y="12" width="4" height="9" rx="1" fill="#F2C811" />
      <rect x="10" y="7" width="4" height="14" rx="1" fill="#F2C811" />
      <rect x="17" y="3" width="4" height="18" rx="1" fill="#F2C811" />
    </svg>
  );
}

export function ExcelIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" fill="#107C41" />
      <path d="M8.2 16.5l2.4-3.8-2.4-3.8h2.2l1.3 2.4 1.3-2.4h2.1l-2.4 3.8 2.4 3.8h-2.2l-1.3-2.4-1.3 2.4H8.2z" fill="#FFFFFF" />
    </svg>
  );
}

export function PandasIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <rect x="4" y="2" width="4" height="20" rx="1" fill="#150458" />
      <rect x="10" y="6" width="4" height="12" rx="1" fill="#E70488" />
      <rect x="16" y="2" width="4" height="20" rx="1" fill="#00A3E0" />
    </svg>
  );
}

export function NumpyIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M2.25 4.5h3.75v15H2.25zM18 4.5h3.75v15H18z" fill="#4DABCF" />
      <path d="M6 4.5l12 15h-3.75L2.25 4.5H6z" fill="#013243" />
    </svg>
  );
}

export function MysqlIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.5 13.5c-1.5 1-3.5 1.5-5.5.5-1.2-.6-2-1.8-2.2-3.1h2.1c.2.6.6 1 1.2 1.3 1 .4 2.2.1 2.8-.6.5-.6.6-1.5.2-2.1-.5-.7-1.5-1.1-2.5-1.5l-1-.4c-1.5-.6-2.5-1.7-2.3-3.3.2-1.6 1.5-2.8 3.1-3 1.8-.2 3.5.5 4.5 2h-2.1c-.5-.7-1.4-1.1-2.3-.9-.9.2-1.5.9-1.5 1.7 0 .7.5 1.3 1.2 1.6l1 .4c1.7.7 2.8 1.8 2.6 3.6-.1 1.1-.9 2.1-1.8 2.7z" fill="#00758F" />
    </svg>
  );
}

export function PostgresIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm4 11.5a3.5 3.5 0 0 1-7 0v-3a3.5 3.5 0 0 1 7 0z" fill="#336791" />
    </svg>
  );
}

export function MatplotlibIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 18L9 9l4 5 7-10" stroke="#11557C" />
      <circle cx="9" cy="9" r="2" fill="#11557C" />
      <circle cx="13" cy="14" r="2" fill="#11557C" />
      <circle cx="20" cy="4" r="2" fill="#11557C" />
    </svg>
  );
}

export function SeabornIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 12c3-6 6-6 9 0s6 6 9 0" stroke="#3776AB" />
      <path d="M3 16c3-6 6-6 9 0s6 6 9 0" stroke="#00A3E0" opacity="0.6" />
    </svg>
  );
}

export function PlotlyIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <circle cx="6" cy="6" r="3" fill="#3F4F75" />
      <circle cx="18" cy="6" r="3" fill="#8C9BA5" />
      <circle cx="12" cy="18" r="4" fill="#2391FF" />
    </svg>
  );
}

export function PowerQueryIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 6h16M4 12h10M4 18h16" stroke="#00838F" />
      <path d="M18 10l3 2-3 2v-4z" fill="#00838F" stroke="none" />
    </svg>
  );
}

export function DaxIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="16" rx="3" stroke="#F2C811" />
      <path d="M7 12h3M14 12h3M12 9v6" stroke="#F2C811" strokeLinecap="round" />
    </svg>
  );
}

export function DataCleaningIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity="0.2" />
    </svg>
  );
}

export function EdaIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="7" stroke="#A855F7" />
      <path d="M21 21l-4.35-4.35" stroke="#A855F7" strokeLinecap="round" />
      <path d="M8 11h6M11 8v6" stroke="#06B6D4" strokeLinecap="round" />
    </svg>
  );
}

export function DataVizIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="20" x2="18" y2="10" stroke="#06B6D4" strokeWidth="3" strokeLinecap="round" />
      <line x1="12" y1="20" x2="12" y2="4" stroke="#8B5CF6" strokeWidth="3" strokeLinecap="round" />
      <line x1="6" y1="20" x2="6" y2="14" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function GitIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.216 1.378-.063 1.889.447.514.515.666 1.25.444 1.895l2.66 2.66c.645-.222 1.383-.067 1.897.447.72.718.72 1.884 0 2.604-.719.718-1.885.718-2.603 0-.54-.54-.68-1.332-.423-2.003L12.7 8.802v5.772c.162.085.313.197.444.328.72.719.72 1.886 0 2.605-.718.718-1.886.718-2.603 0-.72-.719-.72-1.886 0-2.605.176-.176.38-.306.598-.388V8.623c-.218-.082-.422-.212-.598-.388-.54-.54-.68-1.334-.42-2.007L7.29 3.447.454 10.283c-.604.604-.604 1.582 0 2.187l10.48 10.478c.604.605 1.582.605 2.186 0l10.426-10.426c.606-.603.606-1.58 0-2.192z" fill="#F05032" />
    </svg>
  );
}

export function HtmlIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.05h9.126l-.326 3.426-2.91.804-2.926-.804-.189-2.137H6.264l.366 4.398 5.34 1.482 5.343-1.482 1.054-11.697H8.531z" fill="#E34F26" />
    </svg>
  );
}

export function CssIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.5 0h21l-1.91 21.563L11.97 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.05h9.126l-.326 3.426-2.91.804-2.926-.804-.189-2.137H6.264l.366 4.398 5.34 1.482 5.343-1.482 1.054-11.697H8.531z" fill="#1572B6" />
    </svg>
  );
}

export function JsIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <rect x="2" y="2" width="20" height="20" rx="3" fill="#F7DF1E" />
      <path d="M11.2 16.8c.4.7 1.1 1.2 2.2 1.2 1.1 0 1.8-.5 1.8-1.5 0-1.1-.7-1.5-2.1-2.1l-.7-.3c-1.9-.8-3.1-1.8-3.1-3.9 0-2.1 1.7-3.7 4.3-3.7 1.8 0 3.1.6 3.9 2.1l-1.8 1.2c-.4-.8-1-1.1-2.1-1.1-1.1 0-1.7.5-1.7 1.2 0 .9.6 1.3 1.9 1.8l.7.3c2.2.9 3.4 1.9 3.4 4.1 0 2.4-1.8 3.9-4.7 3.9-2.6 0-4.2-1.1-5-2.7l1.9-1.5zm-5.4 1c0-.9.4-1.4 1.2-1.4.7 0 1.1.4 1.1 1.3v3.7c0 1.9.9 2.6 2.3 2.6 1.4 0 2.2-.7 2.2-2.6V10.2H11v4.7c0 1.2-.5 1.6-1.1 1.6-.7 0-1.1-.4-1.1-1.6V10.2H5.8v7.6z" fill="#000000" />
    </svg>
  );
}

export function ReactIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="1.5">
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(0 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="2" fill="#61DAFB" />
    </svg>
  );
}

// Master TechIcon component dispatcher
export function TechIcon({ iconKey, className = "w-6 h-6" }) {
  switch (iconKey) {
    case 'python': return <PythonIcon className={className} />;
    case 'sql': return <SqlIcon className={className} />;
    case 'powerbi': return <PowerBiIcon className={className} />;
    case 'excel': return <ExcelIcon className={className} />;
    case 'pandas': return <PandasIcon className={className} />;
    case 'numpy': return <NumpyIcon className={className} />;
    case 'mysql': return <MysqlIcon className={className} />;
    case 'postgres': return <PostgresIcon className={className} />;
    case 'matplotlib': return <MatplotlibIcon className={className} />;
    case 'seaborn': return <SeabornIcon className={className} />;
    case 'plotly': return <PlotlyIcon className={className} />;
    case 'powerquery': return <PowerQueryIcon className={className} />;
    case 'dax': return <DaxIcon className={className} />;
    case 'datacleaning': return <DataCleaningIcon className={className} />;
    case 'eda': return <EdaIcon className={className} />;
    case 'dataviz': return <DataVizIcon className={className} />;
    case 'git': return <GitIcon className={className} />;
    case 'html': return <HtmlIcon className={className} />;
    case 'css': return <CssIcon className={className} />;
    case 'js': return <JsIcon className={className} />;
    case 'react': return <ReactIcon className={className} />;
    default: return <DataVizIcon className={className} />;
  }
}
