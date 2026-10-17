export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products", description: "Smart film variants & glass profiles" },
  { label: "Applications", href: "/applications", description: "Offices, homes, healthcare & hospitality" },
  { label: "Projects", href: "/projects", description: "Real architectural installations" },
  { label: "About Us", href: "/about", description: "Our 17+ years heritage and capabilities" },
  { label: "Contact", href: "/contact", description: "Get in touch or request a quote" },
];

export const primaryAction = {
  label: "Get a Quote",
  href: "/contact",
};
