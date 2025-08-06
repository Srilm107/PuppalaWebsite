import { useParams, Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, Calendar, CheckCircle, Clock, Download, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { Milestone } from "@shared/schema";

export default function MilestoneReport() {
  const { id } = useParams<{ id: string }>();
  
  const { data: milestone, isLoading, error } = useQuery<Milestone>({
    queryKey: ["/api/milestones", id],
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error || !milestone) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="pt-6 text-center">
            <h1 className="text-2xl font-bold text-destructive mb-2">Milestone Not Found</h1>
            <p className="text-muted-foreground mb-4">The requested milestone report could not be found.</p>
            <Link href="/">
              <Button>Return Home</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-emerald-100 text-emerald-700 border-emerald-200";
      case "in-progress": return "bg-blue-100 text-blue-700 border-blue-200";
      case "pending": return "bg-gray-100 text-gray-700 border-gray-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed": return <CheckCircle className="h-4 w-4" />;
      case "in-progress": return <Clock className="h-4 w-4" />;
      case "pending": return <Clock className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Project
                </Button>
              </Link>
              <div className="h-6 w-px bg-border" />
              <div>
                <h1 className="text-2xl font-bold text-foreground">Milestone {milestone.milestoneNumber} Report</h1>
                <p className="text-muted-foreground">{milestone.title}</p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Overview Card */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Milestone Overview</span>
                <Badge className={getStatusColor(milestone.status)}>
                  {getStatusIcon(milestone.status)}
                  <span className="ml-2 capitalize">{milestone.status}</span>
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground leading-relaxed">{milestone.description}</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Deadline:</span>
                  <span className="text-sm font-medium">{milestone.deadline}</span>
                </div>
                {milestone.completionDate && (
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm text-muted-foreground">Completed:</span>
                    <span className="text-sm font-medium">{milestone.completionDate}</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Tasks and Subtasks */}
          {milestone.tasks && milestone.tasks.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Tasks and Subtasks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {milestone.tasks.map((task, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{task}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Success and Achievements */}
          {milestone.achievements && milestone.achievements.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Achievements and Success Criteria</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {milestone.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-foreground">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Learnings */}
          {milestone.learnings && (
            <Card>
              <CardHeader>
                <CardTitle>Key Learnings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">{milestone.learnings}</p>
              </CardContent>
            </Card>
          )}

          {/* Next Steps */}
          {milestone.nextSteps && (
            <Card>
              <CardHeader>
                <CardTitle>Next Steps</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed">{milestone.nextSteps}</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
