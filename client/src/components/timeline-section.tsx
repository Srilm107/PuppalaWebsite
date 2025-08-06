import { useQuery } from "@tanstack/react-query";
import { CheckCircle, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Milestone } from "@shared/schema";

export default function TimelineSection() {
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
          <div className="space-y-12">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="h-32 bg-muted rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!milestones) {
    return (
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">Unable to load timeline data</p>
        </div>
      </section>
    );
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-emerald-600" />;
      case "in-progress":
        return <Clock className="h-4 w-4 text-blue-600" />;
      default:
        return <Clock className="h-4 w-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-emerald-500";
      case "in-progress":
        return "bg-blue-500/50";
      default:
        return "bg-gray-300";
    }
  };

  const getBadgeColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-emerald-100 text-emerald-700 hover:bg-emerald-200";
      case "in-progress":
        return "bg-blue-100 text-blue-700 hover:bg-blue-200";
      default:
        return "bg-gray-100 text-gray-700 hover:bg-gray-200";
    }
  };

  return (
    <section id="timeline" className="py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Project Timeline
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Track the progress through each milestone of the portfolio website development process.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border"></div>

          {milestones.map((milestone, index) => (
            <div
              key={milestone.id}
              className={`relative flex items-center mb-12 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-white shadow-lg ${getStatusColor(
                  milestone.status
                )}`}
              ></div>

              {/* Content card */}
              <div
                className={`ml-16 md:ml-0 md:w-5/12 ${
                  index % 2 === 1 ? "md:pl-8" : "md:pr-8"
                }`}
              >
                <Card className="shadow-md border hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <Badge className={getBadgeColor(milestone.status)}>
                        Milestone {milestone.milestoneNumber}
                      </Badge>
                      <span className="ml-3 text-sm text-muted-foreground">
                        {milestone.completionDate || milestone.deadline}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {milestone.description}
                    </p>
                    <div className="flex items-center text-sm">
                      {getStatusIcon(milestone.status)}
                      <span className="ml-2 capitalize font-medium">
                        {milestone.status === "completed"
                          ? "Completed Successfully"
                          : milestone.status === "in-progress"
                          ? "In Progress"
                          : "Pending"}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
