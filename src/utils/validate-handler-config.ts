import { z } from 'zod'

import { CommandHandlerConfig } from '../types/CommandHandlerConfig.js'
import { EventHandlerConfig } from '../types/EventHandlerConfig.js'

const EventHandlerSchema = z.object({
  eventName: z.string(),
  once: z.boolean().optional(),
  execute: z.function(),
})
const CommandHandlerSchama = z.object({
  data: z.unknown(),
  ephemeral: z.boolean().optional(),
  execute: z.function(),
})
// Validate config to be appropriate value
export const validateEventHandlerConfig = (
  config: unknown,
): config is EventHandlerConfig => {
  // throw error if invalid
  EventHandlerSchema.parse(config)
  return true
}

// Validate config to be appropriate value
export const validateCommandHandlerConfig = (
  config: unknown,
): config is CommandHandlerConfig => {
  // throw error if invalid
  CommandHandlerSchama.parse(config)
  return true
}
