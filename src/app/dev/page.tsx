import { projects, skills, services, getProjectsByPlatform } from '@/data/portfolioData';
import { siteConfig } from '@/data/siteConfig';
import ThemeToggle from '@/components/theme/ThemeToggle';

/**
 * /dev — Development Design Playground
 *
 * NOT part of public navigation. Used for verifying:
 * - Typography (Syne, Jakarta, JetBrains Mono)
 * - Font weights
 * - Theme colors and tokens
 * - Component rendering
 * - Data binding
 */
export default function DevPage() {
  return (
    <main className="min-h-screen px-6 py-12 md:px-12 lg:px-24">
      {/* ================================================================= */}
      {/* HEADER */}
      {/* ================================================================= */}
      <header className="flex items-center justify-between mb-12 pb-6 border-b border-border">
        <div>
          <p className="font-mono text-xs text-text-muted uppercase tracking-widest">
            Development Playground
          </p>
          <h1 className="font-display text-2xl font-bold text-text-primary mt-1">
            Design System Verification
          </h1>
        </div>
        <ThemeToggle />
      </header>

      {/* ================================================================= */}
      {/* TYPOGRAPHY */}
      {/* ================================================================= */}
      <section className="mb-12">
        <SectionTitle>Typography</SectionTitle>

        <div className="space-y-8">
          {/* Display — Syne */}
          <div>
            <Label>Display — Syne</Label>
            <div className="space-y-2 mt-2">
              <p className="font-display text-5xl font-extrabold text-text-primary">
                The Quick Brown Fox
              </p>
              <p className="font-display text-3xl font-bold text-text-primary">
                Heading Level 2 — Bold 700
              </p>
              <p className="font-display text-xl font-semibold text-text-primary">
                Heading Level 3 — Semibold 600
              </p>
            </div>
          </div>

          {/* Body — Plus Jakarta Sans */}
          <div>
            <Label>Body — Plus Jakarta Sans</Label>
            <div className="space-y-2 mt-2">
              <p className="font-body text-lg font-normal text-text-primary">
                Regular 400 — The quick brown fox jumps over the lazy dog.
                Typography is the art and technique of arranging type to make
                written language legible, readable, and appealing.
              </p>
              <p className="font-body text-base font-medium text-text-secondary">
                Medium 500 — Secondary text for supporting information and descriptions.
              </p>
              <p className="font-body text-sm font-semibold text-text-muted">
                Semibold 600 — Muted text for labels and captions.
              </p>
            </div>
          </div>

          {/* Mono — JetBrains Mono */}
          <div>
            <Label>Mono — JetBrains Mono</Label>
            <div className="space-y-2 mt-2">
              <p className="font-mono text-base font-normal text-text-primary">
                Regular 400 — const portfolio = await fetchProjects();
              </p>
              <p className="font-mono text-sm font-medium text-text-secondary">
                Medium 500 — 01 / PROJECT CATEGORY / 2024
              </p>
              <p className="font-mono text-xs text-text-muted uppercase tracking-wider">
                Metadata Label — Section Identifier
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* COLOR TOKENS */}
      {/* ================================================================= */}
      <section className="mb-12">
        <SectionTitle>Color Tokens</SectionTitle>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <ColorSwatch label="bg-primary" className="bg-bg-primary border border-border" />
          <ColorSwatch label="bg-surface" className="bg-bg-surface border border-border" />
          <ColorSwatch label="bg-surface-hover" className="bg-bg-surface-hover border border-border" />
          <ColorSwatch label="bg-elevated" className="bg-bg-elevated border border-border" />
          <ColorSwatch label="accent" className="bg-accent" textClass="text-accent-contrast" />
          <ColorSwatch label="accent-subtle" className="bg-accent-subtle border border-border" />
          <ColorSwatch label="border" className="bg-border" />
          <ColorSwatch label="border-hover" className="bg-border-hover" />
        </div>

        <div className="mt-6 space-y-2">
          <p className="text-text-primary font-body">text-primary — Primary text</p>
          <p className="text-text-secondary font-body">text-secondary — Secondary text</p>
          <p className="text-text-muted font-body">text-muted — Muted text</p>
        </div>

        <div className="mt-6">
          <p className="font-body text-text-secondary">
            Test selection styling: <span className="select-all">Select this text to verify ::selection colors</span>
          </p>
        </div>
      </section>

      {/* ================================================================= */}
      {/* BORDERS & SURFACES */}
      {/* ================================================================= */}
      <section className="mb-12">
        <SectionTitle>Borders & Surfaces</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-lg border border-border bg-bg-surface p-6">
            <p className="font-mono text-xs text-text-muted mb-2">Surface + Border</p>
            <p className="font-body text-text-primary">Default card state</p>
          </div>
          <div className="rounded-lg border border-border-hover bg-bg-surface-hover p-6">
            <p className="font-mono text-xs text-text-muted mb-2">Surface Hover + Border Hover</p>
            <p className="font-body text-text-primary">Hover card state</p>
          </div>
          <div className="rounded-lg border border-border bg-bg-elevated p-6">
            <p className="font-mono text-xs text-text-muted mb-2">Elevated Surface</p>
            <p className="font-body text-text-primary">Elevated card state</p>
          </div>
        </div>
      </section>

      {/* ================================================================= */}
      {/* ACCENT BUTTON */}
      {/* ================================================================= */}
      <section className="mb-12">
        <SectionTitle>Interactive Elements</SectionTitle>

        <div className="flex flex-wrap gap-4">
          <button className="rounded-full bg-accent px-6 py-3 font-body text-sm font-medium text-accent-contrast transition-opacity duration-200 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
            Primary Button
          </button>
          <button className="rounded-full border border-border bg-bg-surface px-6 py-3 font-body text-sm font-medium text-text-primary transition-colors duration-200 hover:border-border-hover hover:bg-bg-surface-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
            Secondary Button
          </button>
          <button className="rounded-full px-6 py-3 font-body text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
            Ghost Button
          </button>
        </div>
      </section>

      {/* ================================================================= */}
      {/* PROJECT DATA */}
      {/* ================================================================= */}
      <section className="mb-12">
        <SectionTitle>
          Project Data ({projects.length} projects)
        </SectionTitle>

        {(['wordpress', 'wix', 'squarespace'] as const).map((platform) => {
          const platformProjects = getProjectsByPlatform(platform);
          return (
            <div key={platform} className="mb-8">
              <h3 className="font-mono text-xs text-text-muted uppercase tracking-widest mb-4">
                {platform} ({platformProjects.length})
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {platformProjects.map((project) => (
                  <div
                    key={project.id}
                    className="rounded-lg border border-border bg-bg-surface p-5"
                  >
                    <p className="font-display text-lg font-bold text-text-primary">
                      {project.title}
                    </p>
                    <p className="font-mono text-xs text-text-muted mt-1">
                      {project.category} · {project.role}
                    </p>
                    <p className="font-body text-sm text-text-secondary mt-3 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="inline-block rounded-full bg-accent-subtle px-2 py-0.5 font-mono text-xs text-text-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.liveUrl && (
                      <p className="font-mono text-xs text-accent mt-2">
                        Live URL: {project.liveUrl}
                      </p>
                    )}
                    {!project.liveUrl && (
                      <p className="font-mono text-xs text-text-muted mt-2">
                        No live URL
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* ================================================================= */}
      {/* SERVICES DATA */}
      {/* ================================================================= */}
      <section className="mb-12">
        <SectionTitle>
          Services ({services.length} items)
        </SectionTitle>

        <div className="space-y-4">
          {services.map((service) => (
            <div
              key={service.number}
              className="flex gap-6 rounded-lg border border-border bg-bg-surface p-5"
            >
              <span className="font-mono text-2xl font-bold text-accent shrink-0">
                {service.number}
              </span>
              <div>
                <p className="font-display text-lg font-bold text-text-primary">
                  {service.title}
                </p>
                <p className="font-body text-sm text-text-secondary mt-1">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block rounded-full bg-accent-subtle px-2 py-0.5 font-mono text-xs text-text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================================================================= */}
      {/* SKILLS DATA */}
      {/* ================================================================= */}
      <section className="mb-12">
        <SectionTitle>
          Skills ({skills.length} categories)
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((category) => (
            <div
              key={category.category}
              className="rounded-lg border border-border bg-bg-surface p-5"
            >
              <h3 className="font-display text-base font-bold text-text-primary mb-3">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-block rounded-full border border-border px-2.5 py-1 font-mono text-xs text-text-secondary"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================================================================= */}
      {/* SITE CONFIG */}
      {/* ================================================================= */}
      <section className="mb-12">
        <SectionTitle>Site Configuration</SectionTitle>

        <div className="rounded-lg border border-border bg-bg-surface p-6">
          <div className="space-y-2">
            <Row label="Name" value={siteConfig.name} />
            <Row label="Role" value={siteConfig.role} />
            <Row label="Navigation" value={siteConfig.navigation.map((n) => n.label).join(', ')} />
            <Row label="Social" value={siteConfig.social.map((s) => s.platform).join(', ')} />
            <Row label="Email" value={siteConfig.contact.email ?? 'Not set'} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border pt-8 pb-16">
        <p className="font-mono text-xs text-text-muted">
          Development Playground — Not for public use
        </p>
      </footer>
    </main>
  );
}

// =============================================================================
// LOCAL HELPER COMPONENTS (dev page only)
// =============================================================================

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-xl font-bold text-text-primary mb-6 pb-3 border-b border-border">
      {children}
    </h2>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs text-accent uppercase tracking-widest">
      {children}
    </p>
  );
}

function ColorSwatch({
  label,
  className,
  textClass,
}: {
  label: string;
  className: string;
  textClass?: string;
}) {
  return (
    <div className={`rounded-lg p-4 ${className}`}>
      <p className={`font-mono text-xs ${textClass ?? 'text-text-primary'}`}>
        {label}
      </p>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="font-mono text-xs text-text-muted w-24 shrink-0">{label}</span>
      <span className="font-body text-sm text-text-primary">{value}</span>
    </div>
  );
}
