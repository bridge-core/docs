---
layout: page
title: Meet the Team
description: bridge. would not be possible without the help of its dedicated team of developers and contributors.
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamPageSection,
  VPTeamMembers
} from 'vitepress/theme'
import coreTeam from './data/team/main.json'
import emeriti from './data/team/emeriti.json'

</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>Meet the Team</template>
    <template #lead>
      bridge. would not be possible without the help of its dedicated team of developers and contributors.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members="coreTeam" />
  <VPTeamPageSection>
    <template #title>Team Emeriti</template>
    <template #lead>
      We honor the valuable contributions the following, no longer active, contributors have made to the project in the past.
    </template>
    <template #members>
      <VPTeamMembers size="small" :members="emeriti" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
