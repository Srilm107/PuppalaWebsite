import { useQuery } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { CheckCircle, Eye, Download, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Milestone } from "@shared/schema";

export default function MilestonesSection() {
  const [, setLocation] = useLocation();
  const { data: milestones, isLoading } = useQuery<Milestone[]>({
    queryKey: ["/api/milestones"],
  });

  if (isLoading) {
    return (
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-12 bg-muted rounded mb-4 w-64 mx-auto"></div>
            <div className="h-6 bg-muted rounded max-w-2xl mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="h-96 bg-muted rounded-xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!milestones) {
    return (
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">Unable to load milestones data</p>
        </div>
      </section>
    );
  }

  const getGradientColor = (milestoneNumber: number) => {
    const gradients = [
      "from-emerald-500 to-emerald-400",
      "from-blue-500 to-blue-400", 
      "from-purple-500 to-purple-400",
      "from-orange-500 to-orange-400",
    ];
    return gradients[(milestoneNumber - 1) % gradients.length];
  };

  const getStatusIcon = (status: string) => {
    return status === "completed" ? (
      <CheckCircle className="text-2xl" />
    ) : (
      <Clock className="text-2xl" />
    );
  };

  return (
    <section id="milestones" className="py-16 lg:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Milestone Reports
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Detailed progress reports for each milestone, documenting achievements, learnings, and next steps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {milestones.map((milestone) => (
            <Card
              key={milestone.id}
              className="overflow-hidden hover:shadow-xl transition-shadow border"
            >
              <CardHeader
                className={`bg-gradient-to-r ${getGradientColor(
                  milestone.milestoneNumber
                )} p-6`}
              >
                <div className="flex items-center justify-between text-white">
                  <h3 className="text-xl font-semibold">
                    Milestone {milestone.milestoneNumber}
                  </h3>
                  {getStatusIcon(milestone.status)}
                </div>
                <p className="text-white/80 mt-2">
                  {milestone.completionDate || milestone.deadline}
                </p>
              </CardHeader>
              
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  {milestone.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-4">
                  {milestone.description}
                </p>
                
                {milestone.tasks && milestone.tasks.length > 0 && (
                  <div className="space-y-2 mb-6">
                    {milestone.tasks.slice(0, 4).map((task, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-emerald-600 mr-2 flex-shrink-0" />
                        <span className="text-foreground">{task}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="flex gap-3">
                  <Button
                    onClick={() => setLocation(`/milestone/${milestone.id}`)}
                    className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                    size="sm"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    View Report
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
