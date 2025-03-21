import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import React from "react";

const RightSideBar = () => {
  return (
    <div className="w-full">
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
                  <AvatarImage
                    src="/placeholder.svg?height=20&width=20"
                    alt="User"
                  />
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
                  <AvatarImage
                    src="/placeholder.svg?height=20&width=20"
                    alt="User"
                  />
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
                <AvatarImage
                  src="/placeholder.svg?height=40&width=40"
                  alt="Nick Shelburne"
                />
                <AvatarFallback>NS</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-sm font-medium">Nick</h3>
                <p className="text-xs text-gray-500">Shelburne</p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="h-7 rounded-full border-black px-4 text-xs font-medium"
            >
              Follow
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Avatar>
                <AvatarImage
                  src="/placeholder.svg?height=40&width=40"
                  alt="Brittni Lando"
                />
                <AvatarFallback>BL</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-sm font-medium">Brittni</h3>
                <p className="text-xs text-gray-500">Lando</p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="h-7 rounded-full border-black px-4 text-xs font-medium"
            >
              Follow
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Avatar>
                <AvatarImage
                  src="/placeholder.svg?height=40&width=40"
                  alt="Ivan Shevchenko"
                />
                <AvatarFallback>IS</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-sm font-medium">Ivan</h3>
                <p className="text-xs text-gray-500">Shevchenko</p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="h-7 rounded-full border-black px-4 text-xs font-medium"
            >
              Follow
            </Button>
          </div>
          <Button
            variant="link"
            size="sm"
            className="h-6 p-0 text-xs text-gray-500"
          >
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
  );
};

export default RightSideBar;
