<template>
    <div class="min-h-screen relative lg:static bg-gray-700">
        <AppHeader></AppHeader>
        <div class="flex min-h-screen">
            <AppAside></AppAside>
            <slot></slot>
        </div>
    </div>
</template>