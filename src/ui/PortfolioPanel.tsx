import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconButton } from '@mui/material';

interface Props {
    open: boolean;
    onClose: () => void;
}

const SECTION_STYLE: React.CSSProperties = {
    marginBottom: '2.5rem',
};

const HEADING_STYLE: React.CSSProperties = {
    fontSize: '0.65rem',
    letterSpacing: '0.25rem',
    color: '#666',
    marginBottom: '1rem',
    textTransform: 'uppercase' as const,
};

const CARD_STYLE: React.CSSProperties = {
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '6px',
    padding: '1rem 1.25rem',
    marginBottom: '0.75rem',
    background: 'rgba(255,255,255,0.02)',
};

const TAG_STYLE: React.CSSProperties = {
    display: 'inline-block',
    fontSize: '0.6rem',
    letterSpacing: '0.1rem',
    color: '#aaa',
    border: '1px solid rgba(255,255,255,0.15)',
    borderRadius: '3px',
    padding: '2px 7px',
    marginRight: '6px',
    marginBottom: '6px',
};

const projects = [
    {
        title: 'Regulatory Risk Intelligence',
        stack: ['Python', 'TF-IDF', 'scikit-learn', 'NLP'],
        bullets: [
            'Temporal NLP engine processing 11 years of SEC 10-K filings — 200+ risk sections converted to quantitative features.',
            'Identified a 25% drop in cosine similarity in 2020, surfacing a measurable shift in corporate risk disclosure language.',
        ],
    },
    {
        title: 'Property Valuation ML Engine',
        stack: ['Python', 'scikit-learn', 'Gradient Boosting', 'pandas'],
        bullets: [
            'End-to-end ML pipeline on the Ames dataset (2,900+ properties, 80+ features) — preprocessing, training, evaluation, inference.',
            'Gradient Boosting selected via 5-fold CV: R² ≈ 0.90, RMSE ≈ $27K. Modular design with automated feature-importance output.',
        ],
    },
    {
        title: 'JPMorgan Quantitative Research Simulation',
        stack: ['Python', 'pandas', 'scikit-learn', 'matplotlib'],
        bullets: [
            'Built a commodity storage contract pricing model incorporating market data, constraints, and cost factors.',
            'Developed a credit risk model estimating probability of default with FICO score bucketing for customer segmentation.',
        ],
    },
];

const skillGroups = [
    {
        label: 'Languages',
        items: ['Python', 'SQL', 'C++', 'pandas', 'NumPy', 'scikit-learn', 'matplotlib', 'seaborn'],
    },
    {
        label: 'Tools & Platforms',
        items: ['AWS', 'MySQL', 'Tableau', 'Colab', 'VSCode'],
    },
    {
        label: 'Certificates',
        items: ['Agile PM — JPMorgan', 'Bloomberg Market Concepts', 'AWS ML — in progress'],
    },
];

export function PortfolioPanel({ open, onClose }: Props) {
    if (!open) return null;

    return (
        <div
            onClick={onClose}
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 200,
                background: 'rgba(0,0,0,0.6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                pointerEvents: 'auto',
            }}
        >
            {/* Panel */}
            <div
                onClick={(e) => e.stopPropagation()}
                style={{
                    width: 'min(680px, 92vw)',
                    maxHeight: '85vh',
                    overflowY: 'auto',
                    background: '#0a0a0a',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    padding: '2.5rem 2.5rem 2rem',
                    fontFamily: 'Cousine, monospace',
                    color: '#ddd',
                    position: 'relative',
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#333 transparent',
                }}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1.25rem',
                        background: 'none',
                        border: 'none',
                        color: '#666',
                        fontSize: '1.1rem',
                        cursor: 'pointer',
                        letterSpacing: '1px',
                        padding: '4px 8px',
                        lineHeight: 1,
                    }}
                >
                    ×
                </button>

                {/* Header */}
                <div style={{ marginBottom: '2.5rem' }}>
                    <div style={{ fontSize: '1rem', fontWeight: 'bold', letterSpacing: '0.4rem', marginBottom: '0.5rem' }}>
                        ROBERTO CUEN
                    </div>
                    <div style={{ fontSize: '0.7rem', color: '#888', letterSpacing: '0.15rem' }}>
                        ML ENGINEER · SOFTWARE DEVELOPER
                    </div>
                </div>

                {/* About */}
                <div style={SECTION_STYLE}>
                    <div style={HEADING_STYLE}>About</div>
                    <p style={{ lineHeight: 1.7, color: '#bbb', fontSize: '0.8rem', margin: 0 }}>
                        Building at the intersection of machine learning and financial systems.
                        Background in quantitative finance and data engineering — now deepening in computer science at NYU.
                        I design pipelines that turn messy data into decisions: from SEC filing analysis to ML-driven pricing models.
                        Open to SWE and MLE roles across finance and beyond.
                    </p>
                    <div style={{ marginTop: '1rem', fontSize: '0.75rem', color: '#999', lineHeight: 1.8 }}>
                        <div>M.S. Computer Engineering · New York University · Expected 2027</div>
                        <div>B.S. Finance · University of South Florida</div>
                    </div>
                </div>

                {/* Projects */}
                <div style={SECTION_STYLE}>
                    <div style={HEADING_STYLE}>Projects</div>
                    {projects.map((p) => (
                        <div key={p.title} style={CARD_STYLE}>
                            <div style={{ fontSize: '0.78rem', fontWeight: 'bold', letterSpacing: '0.05rem', marginBottom: '0.5rem' }}>
                                {p.title}
                            </div>
                            <div style={{ marginBottom: '0.75rem' }}>
                                {p.stack.map((t) => <span key={t} style={TAG_STYLE}>{t}</span>)}
                            </div>
                            <ul style={{ margin: 0, paddingLeft: '1.1rem', color: '#aaa', fontSize: '0.72rem', lineHeight: 1.7 }}>
                                {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Skills */}
                <div style={SECTION_STYLE}>
                    <div style={HEADING_STYLE}>Skills</div>
                    {skillGroups.map((g) => (
                        <div key={g.label} style={{ marginBottom: '0.75rem' }}>
                            <div style={{ fontSize: '0.62rem', color: '#666', letterSpacing: '0.15rem', marginBottom: '0.4rem' }}>
                                {g.label.toUpperCase()}
                            </div>
                            <div>
                                {g.items.map((s) => <span key={s} style={TAG_STYLE}>{s}</span>)}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact */}
                <div style={SECTION_STYLE}>
                    <div style={HEADING_STYLE}>Contact</div>
                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                        <IconButton
                            component="a"
                            href="mailto:cuenr12@gmail.com"
                            size="small"
                            sx={{ color: '#aaa', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', '&:hover': { color: '#fff', borderColor: 'rgba(255,255,255,0.3)' } }}
                        >
                            <EmailIcon fontSize="small" />
                        </IconButton>
                        <IconButton
                            component="a"
                            href="https://linkedin.com/in/robertocuen"
                            target="_blank"
                            rel="noopener noreferrer"
                            size="small"
                            sx={{ color: '#aaa', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', '&:hover': { color: '#fff', borderColor: 'rgba(255,255,255,0.3)' } }}
                        >
                            <LinkedInIcon fontSize="small" />
                        </IconButton>
                        <span style={{ fontSize: '0.7rem', color: '#666', marginLeft: '0.5rem' }}>
                            cuenr12@gmail.com · linkedin.com/in/robertocuen
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
