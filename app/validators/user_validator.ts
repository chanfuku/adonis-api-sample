import vine from '@vinejs/vine'

/**
 * Validates the post's creation action
 */
export const userValidator = vine.compile(
  vine.object({
    firstName: vine.string().trim().minLength(1),
    lastName: vine.string().trim().minLength(1),
  })
)
