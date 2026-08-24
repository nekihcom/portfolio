import { z } from "zod";
import siteData from "@/data/site.json";

const SiteSchema = z.object({
  siteName: z.string(),
  siteUrl: z.string(),
  contactFormUrl: z.string(),
  snsLinks: z.array(
    z.object({
      label: z.string(),
      name: z.string(),
      href: z.string(),
    }),
  ),
});

const site = SiteSchema.parse(siteData);

export const SITE_NAME = site.siteName;
export const SITE_URL = site.siteUrl;
export const CONTACT_FORM_URL = site.contactFormUrl;
export const SNS_LINKS = site.snsLinks;
