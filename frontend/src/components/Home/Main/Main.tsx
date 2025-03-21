import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ChevronDown,
  FileText,
  ImageIcon,
  MapPin,
  MessageCircle,
  MoreVertical,
  ThumbsUp,
  Users,
} from "lucide-react";
import React from "react";

const Main = () => {
  return (
    <div className="bg-transparent relative w-full h-full pt-6 px-4 md:px-6 lg:px-4 dark:bg-[#141414]">
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
                  <AvatarImage
                    src="/placeholder.svg?height=40&width=40"
                    alt="George Lobko"
                  />
                  <AvatarFallback>GL</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">George Lobko</h3>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"
              >
                <MoreVertical className="h-5 w-5" />
              </Button>
            </div>
            <div className="mb-3">
              <p className="text-sm">
                Hi everyone, today I was on the most beautiful mountain in the
                world 🌎, I also want to say hi to 🎮 Silena, 🌹 Olya and 🎯
                Davis!
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
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 text-xs text-pink-500"
                >
                  <ThumbsUp className="mr-1 h-4 w-4" />
                  Like
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 text-xs text-gray-500"
                >
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
                  <AvatarImage
                    src="/placeholder.svg?height=40&width=40"
                    alt="Vitaliy Boyko"
                  />
                  <AvatarFallback>VB</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">Vitaliy Boyko</h3>
                  <p className="text-xs text-gray-500">3 hours ago</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"
              >
                <MoreVertical className="h-5 w-5" />
              </Button>
            </div>
            <div className="mb-3">
              <p className="text-sm">
                I chose a wonderful coffee today, I wanted to tell you what
                product they have in stock - it&apos;s a latte with coconut 🥥
                milk... delicious... it&apos;s really incredibly tasty!!! 🔥
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
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 text-xs text-gray-500"
                >
                  <ThumbsUp className="mr-1 h-4 w-4" />
                  Like
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 text-xs text-gray-500"
                >
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
                <AvatarImage
                  src="/placeholder.svg?height=40&width=40"
                  alt="User"
                />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <div className="flex-1 rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-500">
                Share something
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs text-gray-500"
                >
                  <FileText className="mr-1 h-4 w-4" />
                  File
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs text-gray-500"
                >
                  <ImageIcon className="mr-1 h-4 w-4" />
                  Image
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs text-gray-500"
                >
                  <MapPin className="mr-1 h-4 w-4" />
                  Location
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs text-gray-500"
                >
                  <Users className="mr-1 h-4 w-4" />
                  Public
                  <ChevronDown className="ml-1 h-3 w-3" />
                </Button>
              </div>
              <Button className="rounded-full bg-black px-6 text-white">
                Send
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
