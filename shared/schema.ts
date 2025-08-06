import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, json, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const milestones = pgTable("milestones", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  description: text("description").notNull(),
  status: text("status").notNull(), // "completed", "in-progress", "pending"
  completionDate: text("completion_date"),
  deadline: text("deadline").notNull(),
  tasks: json("tasks").$type<string[]>().default([]),
  achievements: json("achievements").$type<string[]>().default([]),
  learnings: text("learnings"),
  nextSteps: text("next_steps"),
  milestoneNumber: integer("milestone_number").notNull(),
});

export const projectInfo = pgTable("project_info", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  studentName: text("student_name").notNull(),
  courseName: text("course_name").notNull(),
  institution: text("institution").notNull(),
  projectTitle: text("project_title").notNull(),
  projectDescription: text("project_description").notNull(),
  startDate: text("start_date").notNull(),
  endDate: text("end_date").notNull(),
  currentProgress: integer("current_progress").default(0),
});

export const insertMilestoneSchema = createInsertSchema(milestones).omit({
  id: true,
});

export const insertProjectInfoSchema = createInsertSchema(projectInfo).omit({
  id: true,
});

export type InsertMilestone = z.infer<typeof insertMilestoneSchema>;
export type Milestone = typeof milestones.$inferSelect;
export type InsertProjectInfo = z.infer<typeof insertProjectInfoSchema>;
export type ProjectInfo = typeof projectInfo.$inferSelect;
