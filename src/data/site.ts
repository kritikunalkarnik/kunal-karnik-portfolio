export const services: [string, string, string][] = [
  ['Mobile', 'Custom Mobile Applications', 'Native and cross-platform apps for field teams, floor managers, and operations on the move.'],
  ['Web', 'Web Applications & Dashboards', 'Real-time dashboards, admin panels, and workflow tools for visibility and efficiency.'],
  ['Link', 'Enterprise System Integration', 'ERP, CRM, inventory, and legacy systems connected into one automated workflow.'],
  ['Flow', 'Process Automation', 'Paper, spreadsheet, and manual processes replaced with clear digital workflows.'],
  ['Data', 'Data Analytics & Reporting', 'Operational metrics, supply chain KPIs, and resource utilization turned into decisions.'],
  ['Map', 'Technology Consulting', 'Practical guidance on what to build, what to buy, and what to leave alone.']
];

export const industries: [string, string, string][] = [
  ['Manufacturing', 'Inventory tracking, production scheduling, quality digitization, and shop-floor visibility.', 'manufacturing'],
  ['Construction', 'Field workforce management, progress tracking, material reconciliation, and compliance documentation.', 'construction'],
  ['Supply Chain', 'Shipment visibility, warehouse management, forecasting, and vendor coordination.', 'supply-chain'],
  ['Healthcare', 'Patient flow, appointment scheduling, medical records digitization, and operational dashboards.', 'healthcare'],
  ['Electronics', 'Component inventory, BOM tracking, production monitoring, and service workflow automation.', 'electronics'],
  ['Hospitality', 'Guest experience digitization, staff scheduling, property operations, and procurement optimization.', 'hospitality']
];

export const techGroups: [string, string[]][] = [
  ['Mobile', ['React Native', 'Flutter', 'Swift', 'Kotlin']],
  ['Web & Frontend', ['React', 'Next.js', 'Astro', 'CSS Systems']],
  ['Backend & APIs', ['Node.js', 'Python', 'Go', 'REST', 'GraphQL']],
  ['Cloud & Data', ['AWS', 'Cloudflare', 'Docker', 'PostgreSQL', 'MongoDB']],
  ['Integrations', ['Tally', 'SAP', 'Zoho', 'Salesforce', 'Custom ERPs']]
];

export const faqs: [string, string][] = [
  ['Do you only build software?', 'No. I start with the business process and then decide whether software, integration, automation, or advisory work is the right answer.'],
  ['Can discovery be a standalone engagement?', 'Yes. Discovery and strategy can produce a decision-ready roadmap without requiring you to commit to a full build.'],
  ['How quickly can a project start?', 'Most discovery engagements can start within one week of signing, depending on stakeholder availability.'],
  ['Do you work with existing internal teams?', 'Yes. I can lead delivery, augment your team, or partner with internal engineering and operations teams.'],
  ['What industries are the best fit?', 'Manufacturing, construction, supply chain, healthcare, electronics, and hospitality are especially strong fits.'],
  ['How do you price projects?', 'Discovery is usually fixed-scope. Full builds are milestone-based by phase, with clear go/no-go points.'],
  ['What happens after launch?', 'Deployment includes training, monitoring, handover, and optional ongoing partnership for improvements and support.']
];

export const phases = [
  {
    name: 'Discovery',
    duration: '1-2 weeks',
    business: 'Process map and bottleneck identification',
    technology: 'Technical feasibility assessment',
    description: 'I listen to stakeholders, map how work actually flows, quantify inefficiencies, and document the real problems worth solving.',
    deliverables: ['Current-state process maps', 'Bottleneck report', 'Opportunity assessment', 'Stakeholder summaries']
  },
  {
    name: 'Strategy',
    duration: '1-2 weeks',
    business: 'Approved roadmap with ROI projections',
    technology: 'Architecture decision and stack selection',
    description: 'I define what to build, why it matters, what it costs, and what return you can expect, with options instead of ultimatums.',
    deliverables: ['Solution proposal', 'Architecture document', 'Timeline and milestones', 'Risk plan']
  },
  {
    name: 'Design',
    duration: '2-3 weeks',
    business: 'Workflow-aligned UX approved by stakeholders',
    technology: 'Component system and design specs',
    description: 'Interfaces are designed around the people doing the work, validated with the actual users who will depend on them.',
    deliverables: ['Journey maps', 'Wireframes', 'High-fidelity mockups', 'Interactive prototype']
  },
  {
    name: 'Development',
    duration: '6-12 weeks',
    business: 'Working software demonstrated every 2 weeks',
    technology: 'Production-ready tested codebase',
    description: 'I build in short sprints with regular demos, testing, documentation, and validation against the original bottleneck.',
    deliverables: ['Bi-weekly demos', 'Sprint reports', 'Documented source code', 'System integrations']
  },
  {
    name: 'Deployment',
    duration: '2-4 weeks plus support',
    business: 'Adoption with measurable efficiency gains',
    technology: 'Production deployment and handover',
    description: 'Launch includes deployment, training, adoption monitoring, measurement, and support until the solution is delivering value.',
    deliverables: ['Production deployment', 'User training', 'Monitoring report', 'Maintenance handover']
  }
];
