import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Milestone } from "@shared/schema";

export default function GanttChartSection() {
  const { data: milestones, isLoading } = useQuery<Milestone[]>({
    queryKey: ["/api/milestones"],
  });

  if (isLoading) {
    return (
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-12 bg-muted rounded mb-4 w-64 mx-auto"></div>
            <div className="h-6 bg-muted rounded max-w-2xl mx-auto"></div>
          </div>
          <div className="animate-pulse">
            <div className="h-96 bg-muted rounded-xl"></div>
          </div>
        </div>
      </section>
    );
  }

  if (!milestones) {
    return (
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">Unable to load Gantt chart data</p>
        </div>
      </section>
    );
  }

  const getGanttBarColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-emerald-500";
      case "in-progress":
        return "bg-blue-500/50";
      default:
        return "bg-gray-300";
    }
  };

  const completedMilestones = milestones.filter(m => m.status === "completed").length;
  const totalMilestones = milestones.length;
  const progressPercentage = Math.round((completedMilestones / totalMilestones) * 100);

  return (
    <section id="gantt" className="py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Project Gantt Chart
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interactive visualization of project timeline, milestones, and task dependencies.
          </p>
        </div>

        <Card className="overflow-hidden shadow-lg">
          <CardHeader className="bg-gradient-to-r from-muted to-muted/50 border-b">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <CardTitle className="text-lg font-semibold text-foreground">
                Portfolio Website Development Timeline
              </CardTitle>
              <div className="mt-4 md:mt-0 flex items-center gap-4 text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-emerald-500 rounded mr-2"></div>
                  <span>Completed</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500/50 rounded mr-2"></div>
                  <span>In Progress</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gray-300 rounded mr-2"></div>
                  <span>Pending</span>
                </div>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-6 overflow-x-auto">
            <div className="min-w-full">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 text-sm font-medium text-muted-foreground w-64">
                      Task
                    </th>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((week) => (
                      <th
                        key={week}
                        className="text-center py-3 text-sm font-medium text-muted-foreground w-24"
                      >
                        Week {week}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="space-y-2">
                  {milestones.map((milestone, index) => {
                    // Simplified week mapping for demonstration
                    const weekStart = (index * 2) + 1;
                    const weekEnd = weekStart + 1;
                    
                    return (
                      <tr key={milestone.id} className="border-b border-border/50">
                        <td className="py-4 text-sm font-medium text-foreground">
                          {milestone.title}
                        </td>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((week) => (
                          <td key={week} className="text-center py-4">
                            {week >= weekStart && week <= weekEnd ? (
                              <div
                                className={`w-full h-3 rounded ${getGanttBarColor(
                                  milestone.status
                                )}`}
                              ></div>
                            ) : null}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </CardContent>

          <div className="p-6 bg-muted border-t">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600 mb-1">
                  {progressPercentage}%
                </div>
                <div className="text-sm text-muted-foreground">Overall Progress</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground mb-1">6</div>
                <div className="text-sm text-muted-foreground">Weeks Elapsed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">2</div>
                <div className="text-sm text-muted-foreground">Weeks Remaining</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
