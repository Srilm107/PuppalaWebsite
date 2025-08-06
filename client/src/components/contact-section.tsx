import { useQuery } from "@tanstack/react-query";
import { User, GraduationCap, BookOpen, Calendar, FileText, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ProjectInfo } from "@shared/schema";

export default function ContactSection() {
  const { data: projectInfo, isLoading } = useQuery<ProjectInfo>({
    queryKey: ["/api/project-info"],
  });

  if (isLoading) {
    return (
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="h-12 bg-muted rounded mb-4 w-64 mx-auto"></div>
            <div className="h-6 bg-muted rounded max-w-md mx-auto"></div>
          </div>
          <div className="animate-pulse">
            <div className="h-96 bg-muted rounded-2xl"></div>
          </div>
        </div>
      </section>
    );
  }

  if (!projectInfo) {
    return (
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">Unable to load contact information</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-16 lg:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Contact Information
          </h2>
          <p className="text-lg text-muted-foreground">
            Get in touch for questions about this project or collaboration opportunities.
          </p>
        </div>

        <Card className="overflow-hidden shadow-lg border">
          <div className="grid md:grid-cols-2">
            <div className="p-8">
              <CardTitle className="text-xl font-semibold text-foreground mb-6">
                Student Information
              </CardTitle>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <User className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Student Name</div>
                    <div className="font-medium text-foreground">{projectInfo.studentName}</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Institution</div>
                    <div className="font-medium text-foreground">{projectInfo.institution}</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Course</div>
                    <div className="font-medium text-foreground">{projectInfo.courseName}</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Project Period</div>
                    <div className="font-medium text-foreground">
                      {projectInfo.startDate} - {projectInfo.endDate}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardTitle className="text-xl font-semibold text-foreground mb-6">
                Project Resources
              </CardTitle>
              <div className="space-y-4">
                <Button 
                  variant="outline" 
                  className="w-full justify-between bg-white hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 text-red-500 mr-3" />
                    <span className="font-medium">Complete Project Report</span>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full justify-between bg-white hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center">
                    <ExternalLink className="h-5 w-5 text-primary mr-3" />
                    <span className="font-medium">Live Portfolio Website</span>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full justify-between bg-white hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center">
                    <Github className="h-5 w-5 text-slate-800 mr-3" />
                    <span className="font-medium">GitHub Repository</span>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
