type Packs = "simple-icons" | "logos" | "teenyicons" | "mdi";

export const icon_list: Record<
  string,
  { name: string; iconName: `${Packs}:${string}` }
> = {
  react: {
    name: "React",
    iconName: "simple-icons:react",
  },
  typescript: {
    name: "Typescript",
    iconName: "simple-icons:typescript",
  },
  javascript: {
    name: "Javascript",
    iconName: "simple-icons:javascript",
  },
  prisma: {
    name: "Prisma",
    iconName: "simple-icons:prisma",
  },
  jest: {
    name: "Jest",
    iconName: "simple-icons:jest",
  },
  cypress: {
    name: "Cypress",
    iconName: "simple-icons:cypress",
  },
  remix: {
    name: "Remix",
    iconName: "logos:remix-icon",
  },
  astro: {
    name: "Astro",
    iconName: "simple-icons:astro",
  },
  tailwind: {
    name: "Tailwind",
    iconName: "simple-icons:tailwindcss",
  },
  mysql: {
    name: "MySQL",
    iconName: "simple-icons:mysql",
  },
  postgresql: {
    name: "PostgreSQL",
    iconName: "simple-icons:postgresql",
  },
  nextjs: {
    name: "Next.js",
    iconName: "teenyicons:nextjs-solid",
  },
  nodejs: {
    name: "Node.js",
    iconName: "mdi:nodejs",
  },
  figma: {
    name: "Figma",
    iconName: "teenyicons:figma-outline",
  },
  // github: {
  //   name: "Github",
  //   iconName: "simple-icons:github",
  // },
};

export const tech_names = Object.keys(icon_list);
