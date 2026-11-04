---
name: api-routes
description: Use when creating or changing API route handlers under src/app/api in this Next.js project, such as the reservation endpoint. Defines input validation, response shape, status codes, error handling and the in-memory mock data layer.
---

# API routes for Buka Republic

There is no database in this project. Data lives in a small in-memory store. Routes must still behave like a real API, so follow these rules.

## 1. Where things go
- Route handlers: `src/app/api/<name>/route.ts`, exporting named functions (`GET`, `POST`, and so on).
- Mock data layer: `src/lib/store.ts`. Routes call store functions. Routes never touch the raw array.
- Validation schemas: `src/lib/schemas.ts`, using `zod` (install it if missing).

## 2. Response shape (always)
Success:
```json
{ "ok": true, "data": { }, "message": "Table booked. The auntie has been notified." }
```
Error:
```json
{ "ok": false, "error": { "code": "VALIDATION_ERROR", "message": "Please check the highlighted fields.", "fields": { "guests": "Guests must be between 1 and 12" } } }
```
Never return a different shape. Never return an error with status 200.

## 3. Status codes
- `201` created
- `200` read or updated
- `400` invalid JSON or failed validation
- `404` not found
- `409` conflict (for example a duplicate booking)
- `500` unexpected server error

## 4. Handler recipe
1. Parse the body inside `try/catch`. Bad JSON returns `400`.
2. Validate with the zod schema. Failures return `400` with per-field messages.
3. Apply business rules (section 6). Violations return `400` or `409`.
4. Call the store function.
5. Return the success shape with the right status.
6. In `catch`, log with `console.error` on the server and return a generic `500`. Never send stack traces or internal details to the client.

## 5. Store rules
- Module level array, fully typed, with small functions (`addReservation`, `listReservations`, `findConflict`).
- Cache the array on `globalThis` so it survives hot reload in development.
- Data resets when the server restarts. That is expected. Say so in a comment at the top of the file.

## 6. Business rules for reservations
- Required: name, phone, date, time, guests. Optional: notes.
- Guests must be a whole number from 1 to 12.
- Date cannot be in the past.
- Time must be between 12:00 and 22:00.
- Same name, date and time as an existing booking returns `409` with the message "You already have a table at that time."

## 7. Tone of messages
Messages shown to users are short, friendly and never blame the user. A little humor is welcome on success. Errors stay clear and calm.

## 8. Before you finish
- [ ] Every code path returns the standard response shape
- [ ] No `200` with `ok: false`
- [ ] Bad JSON, bad input and a duplicate booking each tested once
- [ ] No stack traces or raw error objects sent to the client
- [ ] The client form reads `fields` to show errors under the right inputs
