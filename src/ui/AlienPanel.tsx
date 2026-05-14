import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { IconButton } from '@mui/material';
import { useGameStore } from '../core/store/gameStore';

const PANEL_FONT: React.CSSProperties = {
    fontFamily: 'Cousine, monospace',
    color: '#ddd',
};

const HEADING: React.CSSProperties = {
    fontSize: '0.6rem',
    letterSpacing: '0.25rem',
    color: '#555',
    marginBottom: '0.9rem',
    textTransform: 'uppercase' as const,
};

const CARD: React.CSSProperties = {
    border: '1px solid rgba(255,255,255,0.07)',
    borderRadius: '6px',
    padding: '1rem 1.25rem',
    marginBottom: '0.75rem',
    background: 'rgba(255,255,255,0.02)',
};

const TAG: React.CSSProperties = {
    display: 'inline-block',
    fontSize: '0.58rem',
    letterSpacing: '0.08rem',
    color: '#999',
    border: '1px solid rgba(255,255,255,0.12)',
    borderRadius: '3px',
    padding: '2px 7px',
    marginRight: '5px',
    marginBottom: '5px',
};

const DIVIDER: React.CSSProperties = {
    borderTop: '1px solid rgba(255,255,255,0.07)',
    margin: '1.5rem 0',
};

// ─── About ────────────────────────────────────────────────────────────────────

function AboutContent() {
    return (
        <>
            <div style={{ marginBottom: '2rem' }}>
                <div style={{ fontSize: '1rem', fontWeight: 'bold', letterSpacing: '0.4rem', marginBottom: '0.4rem' }}>
                    ROBERTO CUEN
                </div>
                <div style={{ fontSize: '0.68rem', color: '#777', letterSpacing: '0.15rem' }}>
                    ML ENGINEER · SOFTWARE DEVELOPER
                </div>
            </div>

            <section style={{ marginBottom: '1.8rem' }}>
                <div style={HEADING}>About</div>
                <p style={{ fontSize: '0.78rem', lineHeight: 1.75, color: '#bbb', margin: 0 }}>
                    Building at the intersection of machine learning and financial systems.
                    Finance background from USF combined with Computer Engineering depth at NYU —
                    designing pipelines that turn data into decisions.
                </p>
                <p style={{ fontSize: '0.78rem', lineHeight: 1.75, color: '#bbb', marginTop: '0.75rem', marginBottom: 0 }}>
                    From automating 600+ labor-hours of financial workflows to building NLP engines
                    that surface signals in 11 years of SEC filings, the through-line is the same:
                    extract meaning from complex data and make it actionable.
                </p>
            </section>

            <div style={DIVIDER} />

            <section style={{ marginBottom: '1.8rem' }}>
                <div style={HEADING}>Education</div>
                <div style={{ fontSize: '0.76rem', lineHeight: 2, color: '#ccc' }}>
                    <div>M.S. Computer Engineering — <span style={{ color: '#888' }}>New York University (Expected 2027)</span></div>
                    <div>B.S. Finance — <span style={{ color: '#888' }}>University of South Florida</span></div>
                </div>
            </section>

            <div style={DIVIDER} />

            <section style={{ marginBottom: '1.8rem' }}>
                <div style={HEADING}>Experience Highlights</div>
                <div style={CARD}>
                    <div style={{ fontSize: '0.72rem', fontWeight: 'bold', marginBottom: '0.3rem' }}>USF Controllers Office</div>
                    <div style={{ fontSize: '0.65rem', color: '#666', marginBottom: '0.6rem' }}>Accounting Assistant · Mar 2023 – Mar 2025</div>
                    <ul style={{ margin: 0, paddingLeft: '1rem', color: '#aaa', fontSize: '0.7rem', lineHeight: 1.75 }}>
                        <li>Automated financial workflows with Python — reduced processing time by 95%, saving 600+ labor hours annually</li>
                        <li>Built speech-recognition validation tool for 1,000+ balance records (+90% validation speed)</li>
                    </ul>
                </div>
                <div style={CARD}>
                    <div style={{ fontSize: '0.72rem', fontWeight: 'bold', marginBottom: '0.3rem' }}>Computational Social Science & AI Lab</div>
                    <div style={{ fontSize: '0.65rem', color: '#666', marginBottom: '0.6rem' }}>Research · Oct 2023 – Mar 2024</div>
                    <ul style={{ margin: 0, paddingLeft: '1rem', color: '#aaa', fontSize: '0.7rem', lineHeight: 1.75 }}>
                        <li>Processed 633.8 GB of academic data across 3,000+ S2ORC files using Python pipelines</li>
                        <li>Tripled pipeline speed via Pandas + multiprocessing optimization</li>
                    </ul>
                </div>
            </section>

            <div style={DIVIDER} />

            <section>
                <div style={HEADING}>Leadership</div>
                <p style={{ fontSize: '0.76rem', lineHeight: 1.7, color: '#bbb', margin: 0 }}>
                    Co-Founder, <strong>Economics Scholar Society</strong> (USF) —
                    Built and scaled a student-led organization through academic and industry partnerships.
                </p>
            </section>
        </>
    );
}

// ─── Projects ─────────────────────────────────────────────────────────────────

const projects = [
    {
        title: 'Regulatory Risk Intelligence',
        stack: ['Python', 'NLP', 'TF-IDF', 'scikit-learn', 'seaborn'],
        bullets: [
            'Temporal NLP engine processing 11 years of SEC 10-K filings — 200+ risk sections converted to quantitative features.',
            'TF-IDF + cosine similarity revealed a 25% drop in disclosure language similarity in 2020, signaling a measurable shift in corporate risk reporting.',
            'Positive correlation found between risk language shifts and market volatility — SEC filings as a viable alternative data signal.',
        ],
    },
    {
        title: 'Property Valuation ML Engine',
        stack: ['Python', 'scikit-learn', 'Gradient Boosting', 'pandas', 'matplotlib'],
        bullets: [
            'End-to-end ML pipeline on the Ames dataset (2,900+ properties, 80+ features) — preprocessing, training, evaluation, and inference.',
            'Gradient Boosting selected via 5-fold CV: R² ≈ 0.90, RMSE ≈ $27K. Compared against Linear Regression and Random Forest.',
            'Modular architecture with automated outputs: feature importance charts and prediction diagnostics.',
        ],
    },
    {
        title: 'JPMorgan Quantitative Research Simulation',
        stack: ['Python', 'pandas', 'scikit-learn', 'matplotlib'],
        bullets: [
            'Analyzed commodity price data to build models estimating historical and forward prices.',
            'Developed a pricing model for commodity storage contracts under varying market conditions and cost constraints.',
            'Built a credit risk model estimating probability of default with FICO score bucketing for customer segmentation.',
        ],
    },
];

function ProjectsContent() {
    return (
        <>
            <div style={{ marginBottom: '1.8rem' }}>
                <div style={{ fontSize: '1rem', fontWeight: 'bold', letterSpacing: '0.4rem', marginBottom: '0.4rem' }}>
                    PROJECTS
                </div>
                <div style={{ fontSize: '0.68rem', color: '#777', letterSpacing: '0.15rem' }}>
                    ML ENGINEERING · QUANTITATIVE FINANCE
                </div>
            </div>

            {projects.map((p) => (
                <div key={p.title} style={{ ...CARD, marginBottom: '1rem' }}>
                    <div style={{ fontSize: '0.78rem', fontWeight: 'bold', letterSpacing: '0.04rem', marginBottom: '0.5rem' }}>
                        {p.title}
                    </div>
                    <div style={{ marginBottom: '0.8rem' }}>
                        {p.stack.map((t) => <span key={t} style={TAG}>{t}</span>)}
                    </div>
                    <ul style={{ margin: 0, paddingLeft: '1.1rem', color: '#aaa', fontSize: '0.71rem', lineHeight: 1.75 }}>
                        {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
                    </ul>
                </div>
            ))}
        </>
    );
}

// ─── Resume ───────────────────────────────────────────────────────────────────

const skillGroups = [
    { label: 'Languages', items: ['Python', 'SQL', 'C++'] },
    { label: 'Libraries', items: ['pandas', 'NumPy', 'scikit-learn', 'matplotlib', 'seaborn'] },
    { label: 'Tools', items: ['AWS', 'MySQL', 'Tableau', 'Colab', 'VSCode'] },
    { label: 'Certificates', items: ['Agile PM — JPMorgan', 'Bloomberg Market Concepts', 'AWS ML *(in progress)*'] },
];

const experience = [
    {
        org: 'USF Controllers Office',
        role: 'Accounting Assistant (Data and Automation Focus)',
        period: 'Mar 2023 – Mar 2025',
        bullets: [
            'Automated financial data workflows with Python, reducing processing time by 95% and saving 600+ labor hours annually.',
            'Built a speech-recognition validation tool to verify 1,000+ balance records; increased validation speed by 90%.',
            'Optimized loan data pipelines by restructuring data flows and validation logic.',
        ],
    },
    {
        org: 'Computational Social Science and AI Lab',
        role: 'Research (Data Engineering & Analytics Focus)',
        period: 'Oct 2023 – Mar 2024',
        bullets: [
            'Processed 633.8 GB of academic data across 3,000+ S2ORC files using Python-based pipelines.',
            'Parsed 1M+ author records via NAMSOR APIs to infer demographic attributes for STEM diversity analysis.',
            'Tripled pipeline processing speed via Pandas and multiprocessing optimization.',
        ],
    },
    {
        org: 'USF SEES Lab',
        role: 'Research (Hardware Focus)',
        period: 'Sep 2023 – Mar 2024',
        bullets: [
            'Modeled digital systems as structured data using VOSSII and functional programming, reducing validation errors by ~20%.',
            'Improved system reliability by ~30% across Linux (Ubuntu) environments through debugging collaboration.',
        ],
    },
];

function ResumeContent() {
    return (
        <>
            <div style={{ marginBottom: '1.8rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                    <div style={{ fontSize: '1rem', fontWeight: 'bold', letterSpacing: '0.4rem', marginBottom: '0.4rem' }}>
                        ROBERTO CUEN
                    </div>
                    <div style={{ fontSize: '0.65rem', color: '#666', lineHeight: 1.8 }}>
                        <div>cuenr12@gmail.com</div>
                        <div>linkedin.com/in/robertocuen</div>
                    </div>
                </div>
                <a
                    href="/resume.pdf"
                    download
                    style={{
                        display: 'flex', alignItems: 'center', gap: '6px',
                        color: '#aaa', textDecoration: 'none',
                        fontSize: '0.65rem', letterSpacing: '0.1rem',
                        border: '1px solid rgba(255,255,255,0.12)',
                        borderRadius: '5px', padding: '6px 10px',
                        transition: 'all 0.2s',
                        flexShrink: 0,
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#aaa'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; }}
                >
                    <FileDownloadIcon style={{ fontSize: '14px' }} />
                    PDF
                </a>
            </div>

            <div style={DIVIDER} />

            {/* Education */}
            <section style={{ marginBottom: '1.5rem' }}>
                <div style={HEADING}>Education</div>
                <div style={{ fontSize: '0.74rem', lineHeight: 2, color: '#ccc' }}>
                    <div><strong>M.S. Computer Engineering</strong> — New York University <span style={{ color: '#666' }}>(Expected 2027)</span></div>
                    <div><strong>B.S. Finance</strong> — University of South Florida</div>
                </div>
            </section>

            <div style={DIVIDER} />

            {/* Skills */}
            <section style={{ marginBottom: '1.5rem' }}>
                <div style={HEADING}>Skills</div>
                {skillGroups.map((g) => (
                    <div key={g.label} style={{ marginBottom: '0.6rem' }}>
                        <div style={{ fontSize: '0.58rem', color: '#555', letterSpacing: '0.15rem', marginBottom: '0.35rem' }}>
                            {g.label.toUpperCase()}
                        </div>
                        <div>
                            {g.items.map((s) => <span key={s} style={TAG}>{s}</span>)}
                        </div>
                    </div>
                ))}
            </section>

            <div style={DIVIDER} />

            {/* Work Experience */}
            <section style={{ marginBottom: '1.5rem' }}>
                <div style={HEADING}>Work Experience</div>
                {experience.map((e) => (
                    <div key={e.org} style={{ ...CARD, marginBottom: '0.85rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.2rem', gap: '1rem' }}>
                            <div style={{ fontSize: '0.74rem', fontWeight: 'bold' }}>{e.org}</div>
                            <div style={{ fontSize: '0.62rem', color: '#666', whiteSpace: 'nowrap', flexShrink: 0 }}>{e.period}</div>
                        </div>
                        <div style={{ fontSize: '0.65rem', color: '#777', fontStyle: 'italic', marginBottom: '0.6rem' }}>{e.role}</div>
                        <ul style={{ margin: 0, paddingLeft: '1rem', color: '#aaa', fontSize: '0.69rem', lineHeight: 1.75 }}>
                            {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
                        </ul>
                    </div>
                ))}
            </section>

            <div style={DIVIDER} />

            {/* Projects (brief) */}
            <section style={{ marginBottom: '1.5rem' }}>
                <div style={HEADING}>Projects</div>
                {projects.map((p) => (
                    <div key={p.title} style={{ ...CARD, marginBottom: '0.6rem' }}>
                        <div style={{ fontSize: '0.72rem', fontWeight: 'bold', marginBottom: '0.35rem' }}>{p.title}</div>
                        <div>{p.stack.map((t) => <span key={t} style={TAG}>{t}</span>)}</div>
                    </div>
                ))}
            </section>

            <div style={DIVIDER} />

            {/* Contact */}
            <section>
                <div style={HEADING}>Contact</div>
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
                    <span style={{ fontSize: '0.68rem', color: '#555', marginLeft: '0.4rem' }}>
                        cuenr12@gmail.com · linkedin.com/in/robertocuen
                    </span>
                </div>
            </section>
        </>
    );
}

// ─── Panel Shell ──────────────────────────────────────────────────────────────

const ALIEN_ACCENT: Record<string, string> = {
    about: '#00ffaa',
    projects: '#ffcc00',
    resume: '#cc44ff',
};

export function AlienPanel() {
    const activeAlien = useGameStore((s) => s.activeAlien);
    const setActiveAlien = useGameStore((s) => s.setActiveAlien);

    if (!activeAlien) return null;

    const accent = ALIEN_ACCENT[activeAlien];

    return (
        <div
            onClick={() => setActiveAlien(null)}
            style={{
                position: 'fixed', inset: 0, zIndex: 200,
                background: 'rgba(0,0,0,0.55)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                pointerEvents: 'auto',
            }}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                style={{
                    ...PANEL_FONT,
                    width: 'min(680px, 92vw)',
                    maxHeight: '85vh',
                    overflowY: 'auto',
                    background: '#080808',
                    border: `1px solid ${accent}33`,
                    borderTop: `2px solid ${accent}`,
                    borderRadius: '8px',
                    padding: '2.5rem 2.5rem 2rem',
                    position: 'relative',
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#222 transparent',
                }}
            >
                {/* Close */}
                <button
                    onClick={() => setActiveAlien(null)}
                    style={{
                        position: 'absolute', top: '1rem', right: '1.25rem',
                        background: 'none', border: 'none', color: '#555',
                        fontSize: '1.1rem', cursor: 'pointer',
                        letterSpacing: '1px', padding: '4px 8px', lineHeight: 1,
                        fontFamily: 'Cousine, monospace',
                    }}
                >
                    ×
                </button>

                {activeAlien === 'about' && <AboutContent />}
                {activeAlien === 'projects' && <ProjectsContent />}
                {activeAlien === 'resume' && <ResumeContent />}

                {/* Walk-away hint */}
                <div style={{ marginTop: '2rem', fontSize: '0.58rem', color: '#333', letterSpacing: '0.15rem', textAlign: 'center' }}>
                    WALK AWAY TO CLOSE · OR PRESS ×
                </div>
            </div>
        </div>
    );
}
