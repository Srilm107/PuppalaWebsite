import { useQuery } from "@tanstack/react-query";
import { Code, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { ProjectInfo } from "@shared/schema";

export default function HeroSection() {
  const { data: projectInfo, isLoading } = useQuery<ProjectInfo>({
    queryKey: ["/api/project-info"],
  });

  if (isLoading) {
    return (
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded mb-6 w-64"></div>
            <div className="h-12 bg-muted rounded mb-6"></div>
            <div className="h-24 bg-muted rounded mb-8"></div>
            <div className="flex gap-4">
              <div className="h-12 bg-muted rounded w-48"></div>
              <div className="h-12 bg-muted rounded w-48"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!projectInfo) {
    return (
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">Unable to load project information</p>
        </div>
      </section>
    );
  }

  return (
    <section id="overview" className="bg-gradient-to-br from-primary/5 to-accent/5 py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="inline-flex items-center mb-6 bg-primary/10 text-primary hover:bg-primary/20">
              <Code className="h-4 w-4 mr-2" />
              {projectInfo.courseName}
            </Badge>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {projectInfo.projectTitle}
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {projectInfo.projectDescription}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Download className="h-4 w-4 mr-2" />
                View Complete Report
              </Button>
              <Button variant="outline">
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Portfolio Site
              </Button>
            </div>
          </div>
          
          <div className="lg:pl-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Project Overview</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Student:</span>
                    <span className="font-medium text-foreground">{projectInfo.studentName}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Course:</span>
                    <span className="font-medium text-foreground">EX30</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Institution:</span>
                    <span className="font-medium text-foreground">{projectInfo.institution}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-medium text-foreground">8 weeks</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Status:</span>
                    <Badge className="bg-accent/10 text-accent hover:bg-accent/20">
                      In Progress ({projectInfo.currentProgress}%)
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
