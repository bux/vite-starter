<template>
    <div>
        <p class="text-4xl">
            <carbon-pedestrian class="inline-block" />
        </p>
        <p>
            {{ t("intro.hi", { name: name }) }}
        </p>
        <p class="text-sm opacity-50">
            <em>{{ t("intro.dynamic-route") }}</em>
        </p>

        <div>
            <button class="btn m-3 text-sm mt-8" @click="router.back()">
                {{ t("button.back") }}
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router"
import { useI18n } from "vue-i18n"
import { defineComponent, PropType } from "vue"

export default defineComponent({
    props: {
        name: {
            type: String as PropType<string>,
            required: true,
        },
    },
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
