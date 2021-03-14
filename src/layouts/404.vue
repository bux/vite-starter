<template>
    <main class="px-4 py-10 text-center text-teal-700 dark:text-gray-200">
        <div>
            <p class="text-4xl">
                <carbon-warning class="inline-block" />
            </p>
        </div>
        <router-view />
        <div>
            <button class="btn m-3 text-sm mt-8" @click="router.back()">
                {{ t("button.back") }}
            </button>
        </div>
    </main>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { useRouter } from "vue-router"
import { useI18n } from "vue-i18n"

export default defineComponent({
    name: "App",
    setup() {
        const router = useRouter()
        const { t } = useI18n()
        return {
            router,
            t,
        }
    },
})
</script>
