<script setup lang="ts">
import type { MenuItem } from 'primevue/menuitem';

const menuItems : MenuItem[] = [
    {
        icon: "pi pi-home",
        to: "/home"
    },
    {
        icon: "pi pi-bookmark",
        to: "/bookmarks"
    },
    {
        icon: "pi pi-users",
        to: "/users"
    },
    {
        icon: "pi pi-table",
        to: "/table"
    },
    {
        icon: "pi pi-search",
        to: "/search"
    }

]
</script>
<template>
    <Menu :model="menuItems" class="!min-w-20 flex flex-col items-center justify-start !border-none !rounded-t-none">
        <template #start>
            <div class="w-20">
                <img src="public/quebrix.png" alt="Image" height="30">
            </div>
        </template>
        <template #item="{ item, props }" class="flex items-start justify-center ">
            <Button as="router-link" :to="item.to" class="flex items-center justify-center !bg-inherit !hover:bg-gray-800 hover:text-white !border-none !w-16">
                <i :class="item.icon" class="!text-white !text-xl"></i>
            </Button>
        </template>
    </Menu>
</template>