import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex flex-1 items-center justify-center py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-md">
            <Tabs defaultValue="student" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="student">Student Login</TabsTrigger>
                <TabsTrigger value="parent">Parent Login</TabsTrigger>
              </TabsList>

              <TabsContent value="student">
                <Card>
                  <CardHeader>
                    <CardTitle>Student Login</CardTitle>
                    <CardDescription>Enter your credentials to access your student dashboard.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="student-email">Email</Label>
                      <Input id="student-email" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="student-password">Password</Label>
                        <Link href="/forgot-password" className="text-sm text-blue-900 hover:underline">
                          Forgot password?
                        </Link>
                      </div>
                      <Input id="student-password" type="password" placeholder="Enter your password" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="student-remember" />
                      <Label htmlFor="student-remember">Remember me</Label>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-blue-900 hover:bg-blue-800">Login</Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="parent">
                <Card>
                  <CardHeader>
                    <CardTitle>Parent Login</CardTitle>
                    <CardDescription>Enter your credentials to access your parent dashboard.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="parent-email">Email</Label>
                      <Input id="parent-email" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="parent-password">Password</Label>
                        <Link href="/forgot-password" className="text-sm text-blue-900 hover:underline">
                          Forgot password?
                        </Link>
                      </div>
                      <Input id="parent-password" type="password" placeholder="Enter your password" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="parent-remember" />
                      <Label htmlFor="parent-remember">Remember me</Label>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-blue-900 hover:bg-blue-800">Login</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="font-medium text-blue-900 hover:underline">
                Contact administration
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
