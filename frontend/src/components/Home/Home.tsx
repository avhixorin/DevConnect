import {
  Bell,
  ChevronDown,
  FileText,
  ImageIcon,
  MapPin,
  MessageCircle,
  MoreVertical,
  ThumbsUp,
  Users,
} from "lucide-react"
import React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs"

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Sidebar */}
      <div className="hidden w-64 border-r border-gray-200 bg-white p-4 md:block">
        <div className="flex flex-col items-center space-y-2">
          <div className="relative">
            <Avatar className="h-20 w-20 border-2 border-white">
              <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Bogdan Nikitin" />
              <AvatarFallback>BN</AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">
              <span className="text-white">👋</span>
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-lg font-bold">Bogdan Nikitin</h2>
            <p className="text-sm text-gray-500">@nikitinbogdan</p>
          </div>
        </div>

        <div className="mt-8 space-y-1">
          <Button variant="default" className="w-full justify-start bg-black text-white hover:bg-gray-800">
            <Bell className="mr-2 h-4 w-4" />
            News Feed
          </Button>
          <Button variant="ghost" className="w-full justify-between">
            <div className="flex items-center">
              <MessageCircle className="mr-2 h-4 w-4" />
              Messages
            </div>
            <Badge className="h-5 w-5 rounded-full bg-black p-0 text-xs text-white">4</Badge>
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <FileText className="mr-2 h-4 w-4" />
            Forums
          </Button>
          <Button variant="ghost" className="w-full justify-between">
            <div className="flex items-center">
              <Users className="mr-2 h-4 w-4" />
              Friends
            </div>
            <Badge className="h-5 w-5 rounded-full bg-black p-0 text-xs text-white">3</Badge>
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <ImageIcon className="mr-2 h-4 w-4" />
            Media
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <svg
              className="mr-2 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            Settings
          </Button>
        </div>

        <div className="mt-auto">
          <div className="mt-8 rounded-xl border border-dashed border-gray-300 p-4">
            <div className="flex items-center justify-center">
              <div className="relative h-16 w-16">
                <div className="absolute h-16 w-16 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 opacity-20"></div>
                <div className="absolute flex h-16 w-16 items-center justify-center">
                  <span className="text-2xl">👋</span>
                </div>
              </div>
            </div>
            <p className="mt-2 text-center text-sm font-medium">Download the App</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="mx-auto max-w-4xl px-4 py-6">
          {/* Feeds Header */}
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-2xl font-bold">Feeds</h1>
            <Tabs defaultValue="recents" className="w-auto">
              <TabsList className="bg-transparent">
                <TabsTrigger
                  value="recents"
                  className="data-[state=active]:bg-transparent data-[state=active]:text-gray-400"
                >
                  Recents
                </TabsTrigger>
                <TabsTrigger
                  value="friends"
                  className="data-[state=active]:bg-transparent data-[state=active]:font-bold data-[state=active]:text-black"
                >
                  Friends
                </TabsTrigger>
                <TabsTrigger
                  value="popular"
                  className="data-[state=active]:bg-transparent data-[state=active]:text-gray-400"
                >
                  Popular
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* Posts */}
          <div className="space-y-4">
            {/* Post 1 */}
            <div className="overflow-hidden rounded-xl bg-white p-4 shadow-sm">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="George Lobko" />
                    <AvatarFallback>GL</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">George Lobko</h3>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </div>
              <div className="mb-3">
                <p className="text-sm">
                  Hi everyone, today I was on the most beautiful mountain in the world 🌎, I also want to say hi to 🎮
                  Silena, 🌹 Olya and 🎯 Davis!
                </p>
              </div>
              <div className="mb-3 grid grid-cols-3 gap-2 rounded-xl overflow-hidden">
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt="Mountain view 1"
                  width={200}
                  height={200}
                  className="h-24 w-full object-cover md:h-32"
                />
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt="Mountain view 2"
                  width={200}
                  height={200}
                  className="h-24 w-full object-cover md:h-32"
                />
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt="Mountain view 3"
                  width={200}
                  height={200}
                  className="h-24 w-full object-cover md:h-32"
                />
              </div>
              <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1 text-gray-500">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-gray-400"
                    >
                      <path
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="text-xs">6355</span>
                  </div>
                  <Button variant="ghost" size="sm" className="h-8 text-xs text-pink-500">
                    <ThumbsUp className="mr-1 h-4 w-4" />
                    Like
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 text-xs text-gray-500">
                    <MessageCircle className="mr-1 h-4 w-4" />
                    Comment
                  </Button>
                </div>
                <Button
                  variant="default"
                  size="sm"
                  className="h-8 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 text-xs text-white"
                >
                  Wow!
                </Button>
              </div>
            </div>

            {/* Post 2 */}
            <div className="overflow-hidden rounded-xl bg-amber-50 p-4 shadow-sm">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Vitaliy Boyko" />
                    <AvatarFallback>VB</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">Vitaliy Boyko</h3>
                    <p className="text-xs text-gray-500">3 hours ago</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </div>
              <div className="mb-3">
                <p className="text-sm">
                  I chose a wonderful coffee today, I wanted to tell you what product they have in stock - it&apos;s a
                  latte with coconut 🥥 milk... delicious... it&apos;s really incredibly tasty!!! 🔥
                </p>
              </div>
              <div className="flex items-center justify-between border-t border-amber-100 pt-3">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1 text-gray-500">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-gray-400"
                    >
                      <path
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="text-xs">6355</span>
                  </div>
                  <Button variant="ghost" size="sm" className="h-8 text-xs text-gray-500">
                    <ThumbsUp className="mr-1 h-4 w-4" />
                    Like
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 text-xs text-gray-500">
                    <MessageCircle className="mr-1 h-4 w-4" />
                    Comment
                  </Button>
                </div>
              </div>
            </div>

            {/* Post Input */}
            <div className="overflow-hidden rounded-xl bg-white p-4 shadow-sm">
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <div className="flex-1 rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-500">
                  Share something
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex space-x-4">
                  <Button variant="ghost" size="sm" className="text-xs text-gray-500">
                    <FileText className="mr-1 h-4 w-4" />
                    File
                  </Button>
                  <Button variant="ghost" size="sm" className="text-xs text-gray-500">
                    <ImageIcon className="mr-1 h-4 w-4" />
                    Image
                  </Button>
                  <Button variant="ghost" size="sm" className="text-xs text-gray-500">
                    <MapPin className="mr-1 h-4 w-4" />
                    Location
                  </Button>
                  <Button variant="ghost" size="sm" className="text-xs text-gray-500">
                    <Users className="mr-1 h-4 w-4" />
                    Public
                    <ChevronDown className="ml-1 h-3 w-3" />
                  </Button>
                </div>
                <Button className="rounded-full bg-black px-6 text-white">Send</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="hidden w-72 border-l border-gray-200 bg-white p-4 lg:block">
        {/* Stories */}
        <div className="mb-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold">Stories</h2>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="/placeholder.svg?height=120&width=160"
                alt="Story 1"
                width={160}
                height={120}
                className="h-20 w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                <div className="flex items-center space-x-1">
                  <Avatar className="h-5 w-5 border border-white">
                    <AvatarImage src="/placeholder.svg?height=20&width=20" alt="User" />
                    <AvatarFallback>A</AvatarFallback>
                  </Avatar>
                  <span className="text-xs text-white">Anatoliy P.</span>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="/placeholder.svg?height=120&width=160"
                alt="Story 2"
                width={160}
                height={120}
                className="h-20 w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                <div className="flex items-center space-x-1">
                  <Avatar className="h-5 w-5 border border-white">
                    <AvatarImage src="/placeholder.svg?height=20&width=20" alt="User" />
                    <AvatarFallback>L</AvatarFallback>
                  </Avatar>
                  <span className="text-xs text-white">Lolita Eams</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Suggestions */}
        <div className="mb-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold">Suggestions</h2>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Nick Shelburne" />
                  <AvatarFallback>NS</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-sm font-medium">Nick</h3>
                  <p className="text-xs text-gray-500">Shelburne</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="h-7 rounded-full border-black px-4 text-xs font-medium">
                Follow
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Brittni Lando" />
                  <AvatarFallback>BL</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-sm font-medium">Brittni</h3>
                  <p className="text-xs text-gray-500">Lando</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="h-7 rounded-full border-black px-4 text-xs font-medium">
                Follow
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Ivan Shevchenko" />
                  <AvatarFallback>IS</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-sm font-medium">Ivan</h3>
                  <p className="text-xs text-gray-500">Shevchenko</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="h-7 rounded-full border-black px-4 text-xs font-medium">
                Follow
              </Button>
            </div>
            <Button variant="link" size="sm" className="h-6 p-0 text-xs text-gray-500">
              See all
            </Button>
          </div>
        </div>

        {/* Recommendations */}
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold">Recommendations</h2>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col items-center rounded-xl bg-gray-100 p-3">
              <div className="mb-1 flex h-10 w-10 items-center justify-center rounded-full bg-white">
                <span className="text-xl">✖️</span>
              </div>
              <span className="text-xs font-medium">UI/UX</span>
            </div>
            <div className="flex flex-col items-center rounded-xl bg-pink-100 p-3">
              <div className="mb-1 flex h-10 w-10 items-center justify-center rounded-full bg-white">
                <span className="text-xl">🎵</span>
              </div>
              <span className="text-xs font-medium">Music</span>
            </div>
            <div className="flex flex-col items-center rounded-xl bg-amber-100 p-3">
              <div className="mb-1 flex h-10 w-10 items-center justify-center rounded-full bg-white">
                <span className="text-xl">🍳</span>
              </div>
              <span className="text-xs font-medium">Cooking</span>
            </div>
            <div className="flex flex-col items-center rounded-xl bg-purple-100 p-3">
              <div className="mb-1 flex h-10 w-10 items-center justify-center rounded-full bg-white">
                <span className="text-xl">🏔️</span>
              </div>
              <span className="text-xs font-medium">Hiking</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

