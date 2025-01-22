"use client"; // أضف هذا السطر في الأعلى

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Mallard Motors",
    role: "Automotive Client",
    content:
      "Dev Duck Co's fullstack expertise transformed our online presence. Their ability to seamlessly integrate frontend and backend technologies resulted in a robust, scalable solution that exceeded our expectations.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Feather Financial",
    role: "FinTech Startup",
    content:
      "Working with Dev Duck Co was a game-changer for our team. Their deep understanding of both client-side and server-side technologies helped us deliver a complex web application on time and within budget.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Quack Foods",
    role: "Restaurant Chain",
    content:
      "Dev Duck Co's fullstack skills are truly impressive. They not only delivered a beautiful, responsive frontend but also engineered a powerful backend that handles our order processing needs with ease.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-primary/20 dark:bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary dark:text-primary mb-12 text-center">
          Happy Ducks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-background-light dark:bg-background-dark">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg font-semibold text-secondary dark:text-primary">
                      {testimonial.name}
                    </CardTitle>
                    <p className="text-sm text-secondary/80 dark:text-primary/80">{testimonial.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-secondary/80 dark:text-primary/80 italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}