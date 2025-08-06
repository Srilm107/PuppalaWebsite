import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Get all milestones
  app.get("/api/milestones", async (req, res) => {
    try {
      const milestones = await storage.getMilestones();
      res.json(milestones);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch milestones" });
    }
  });

  // Get specific milestone
  app.get("/api/milestones/:id", async (req, res) => {
    try {
      const milestone = await storage.getMilestone(req.params.id);
      if (!milestone) {
        return res.status(404).json({ message: "Milestone not found" });
      }
      res.json(milestone);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch milestone" });
    }
  });

  // Get project information
  app.get("/api/project-info", async (req, res) => {
    try {
      const projectInfo = await storage.getProjectInfo();
      if (!projectInfo) {
        return res.status(404).json({ message: "Project info not found" });
      }
      res.json(projectInfo);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch project info" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
