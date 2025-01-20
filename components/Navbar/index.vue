<template>
  <div>
    <!-- Mobile Navbar -->
    <div
      class="z-50 flex items-center justify-between w-full h-16 px-4 bg-white shadow-lg lg:hidden"
    >
      <div class="flex items-center gap-2">
        <Logo />
        <Site />
      </div>
      <div class="flex items-center gap-2">
        <div class="flex items-center gap-4">
          <Button
            class="text-pink-500 border-none px-4 py-2 rounded hover:bg-pink-100"
            variant="null"
          >
            Let's vote !
          </Button>
          <Button
            class="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
            variant="null"
          >
            Sign In
          </Button>
        </div>
        <Icon
          v-if="!open"
          class="z-50 cursor-pointer"
          size="30"
          name="iconamoon:menu-burger-horizontal"
          @click="open = true"
        />
        <Icon
          v-else
          class="z-50 cursor-pointer"
          size="30"
          name="material-symbols:close"
          @click="open = false"
        />
      </div>
    </div>
    <div v-if="open" class="shadow-lg transition lg:hidden">
      <nav class="flex flex-col items-start p-5 gap-2 lg:gap-4">
        <NuxtLink
          :href="item.path"
          v-for="(item, index) in items"
          :key="index"
          class="flex items-center gap-2 px-2 py-1 transition rounded cursor-pointer"
        >
          <Icon
            size="20"
            :name="item.icon"
            color="black"
            class="hover:text-pink-600"
          />
          <span class="text-gray-600 hover:text-pink-600">
            {{ item.title }}
          </span>
        </NuxtLink>
      </nav>
    </div>

    <!-- Desktop Navbar -->
    <div
      class="hidden lg:flex w-screen justify-between items-center px-8 py-4 bg-white shadow"
    >
      <div class="flex items-center gap-4">
        <Logo />
        <Site />

        <div class="relative max-w-sm items-center">
          <Input
            id="search"
            type="text"
            placeholder="Search (ctrl +k)"
            class="pl-10 bg-gray-100 border-none placeholder:font-bold placeholder:text-gray-600"
          />
          <span
            class="absolute text-base start-0 inset-y-0 flex items-center justify-center px-2"
          >
            <Search class="size-6 text-base text-gray-600 font-bold" />
          </span>
        </div>
      </div>
      <nav class="flex items-center lg:gap-4">
        <NuxtLink
          :href="item.path"
          v-for="(item, index) in items"
          :key="index"
          class="flex items-center gap-2 lg:gap-4 px-2 py-1 transition rounded cursor-pointer"
        >
          <Icon
            size="20"
            :name="item.icon"
            color="black"
            class="hover:text-pink-600"
          />
          <span class="text-gray-600 hover:text-pink-600">
            {{ item.title }}
          </span>
        </NuxtLink>
      </nav>
      <div class="flex items-center gap-4">
        <Button
          class="text-pink-500 border-none px-4 py-2 rounded hover:bg-pink-100"
          variant="null"
        >
          Let's vote !
        </Button>
        <Button
          class="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
          variant="null"
        >
          Sign In
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-vue-next'
import { ref } from 'vue'
const open = ref(false)
const items = ref([
  {
    title: 'products',
    path: '/products',
    icon: 'ri:dashboard-line',
  },
  {
    title: 'Sellers',
    path: '/sellers',
    icon: 'lucide:arrow-left-right',
  },
  {
    title: 'Subscribe',
    path: '/subscribe',
    icon: 'lucide:bolt',
  },
])
</script>

<style>
/****** Add any custom styles here *******/
</style>
