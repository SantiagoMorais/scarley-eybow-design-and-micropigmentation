export const componentsRoutesId = {
  aboutUs: "Sobre",
  services: "Serviços",
  faqs: "Perguntas",
};

export interface IRoutes {
  title: string;
  path: string;
}

export const navBarRoutes: IRoutes[] = [
  {
    title: componentsRoutesId.aboutUs,
    path: `#${componentsRoutesId.aboutUs}`,
  },
  {
    title: componentsRoutesId.services,
    path: `#${componentsRoutesId.services}`,
  },
  {
    title: componentsRoutesId.faqs,
    path: `#${componentsRoutesId.faqs}`,
  },
];

export const routes = {
  home: "#",
  about: "#",
  portfolio: "#",
  contacts: "#",
};
