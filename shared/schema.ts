import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, json, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const profile = pgTable("profile", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  title: text("title").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  linkedin: text("linkedin"),
  summary: text("summary").notNull(),
  location: text("location"),
});

export const skills = pgTable("skills", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  category: text("category").notNull(),
  items: json("items").$type<string[]>().notNull(),
});

export const experience = pgTable("experience", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  company: text("company").notNull(),
  position: text("position").notNull(),
  location: text("location"),
  startDate: text("start_date"),
  endDate: text("end_date"),
  description: json("description").$type<string[]>().notNull(),
});

export const education = pgTable("education", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  institution: text("institution").notNull(),
  degree: text("degree").notNull(),
  year: text("year"),
  location: text("location"),
});

export const projects = pgTable("projects", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  duration: text("duration"),
  description: json("description").$type<string[]>().notNull(),
  technologies: json("technologies").$type<string[]>().default([]),
  category: text("category"),
});

export const certifications = pgTable("certifications", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  issuer: text("issuer"),
  year: text("year"),
});

export const insertProfileSchema = createInsertSchema(profile).omit({
  id: true,
});

export const insertSkillsSchema = createInsertSchema(skills).omit({
  id: true,
});

export const insertExperienceSchema = createInsertSchema(experience).omit({
  id: true,
});

export const insertEducationSchema = createInsertSchema(education).omit({
  id: true,
});

export const insertProjectsSchema = createInsertSchema(projects).omit({
  id: true,
});

export const insertCertificationsSchema = createInsertSchema(certifications).omit({
  id: true,
});

export type InsertProfile = z.infer<typeof insertProfileSchema>;
export type Profile = typeof profile.$inferSelect;
export type InsertSkills = z.infer<typeof insertSkillsSchema>;
export type Skills = typeof skills.$inferSelect;
export type InsertExperience = z.infer<typeof insertExperienceSchema>;
export type Experience = typeof experience.$inferSelect;
export type InsertEducation = z.infer<typeof insertEducationSchema>;
export type Education = typeof education.$inferSelect;
export type InsertProjects = z.infer<typeof insertProjectsSchema>;
export type Projects = typeof projects.$inferSelect;
export type InsertCertifications = z.infer<typeof insertCertificationsSchema>;
export type Certifications = typeof certifications.$inferSelect;
