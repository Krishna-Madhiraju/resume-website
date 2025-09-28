"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Phone, MapPin } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">
          Get In Touch
        </h2>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-accent" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="mailto:krishna3589@gmail.com"
                  className="text-accent hover:text-accent/80 transition-colors"
                >
                  krishna3589@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-accent" />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="tel:+64212999930"
                  className="text-accent hover:text-accent/80 transition-colors"
                >
                  +64 212 9999 30
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-accent" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Wellington, New Zealand</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Connect With Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href="https://linkedin.com/in/krishna-madhiraju"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                  {/* 
    <Button variant="outline" size="sm" asChild>
      <a
        href="https://github.com/krishna-madhiraju"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github className="h-4 w-4 mr-2" />
        GitHub
      </a>
    </Button>
    */}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
