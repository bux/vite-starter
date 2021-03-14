<template>
    <div>
        {{ t("not-found") }}
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { useI18n } from "vue-i18n"

export default defineComponent({
    setup() {
        const { t } = useI18n()

        return {
            t,
        }
    },
})
</script>

<route lang="yaml">
meta:
    layout: 404
</route>
