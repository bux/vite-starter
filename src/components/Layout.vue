<template>
    <div class="min-w-screen min-h-screen bg-yellow-300 p-5 lg:p-10">
        <div
            class="w-full max-w-6xl bg-white rounded shadow-xl p-10 lg:px-20 mx-auto text-gray-800 relative md:text-left grid auto-rows-auto gap-6"
        >
            <div class="text-center">
                <slot name="title" />
            </div>
            <div class="text-center">
                <slot name="actions" />
            </div>
            <div class="results">
                <slot name="results" />
            </div>
        </div>
    </div>
</template>
