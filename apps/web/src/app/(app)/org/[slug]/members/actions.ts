'use server'

import { revalidateTag } from 'next/dist/server/web/spec-extension/revalidate'

import { getCurrentOrg } from '@/auth/auth'
import { removeMember } from '@/http/remove-member'

export async function removeMemberAction(memberId: string) {
  const currentOrg = await getCurrentOrg()

  await removeMember({
    org: currentOrg!,
    memberId,
  })

  revalidateTag(`${currentOrg}/members`)
}
