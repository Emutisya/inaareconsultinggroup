# Firebase Functions: Email Notifications

This folder contains Firestore triggers that send admin email notifications when new documents are created.

## Triggers

- `notifyOnNewBooking`
  - Trigger: `bookings/{bookingId}` on create
  - Subject: `New Consultation Booking`
  - Includes: Name, Email, Date, Time, Purpose

- `notifyOnNewMessage`
  - Trigger: `messages/{messageId}` on create
  - Subject: `New Contact Message`
  - Includes: Name, Email, Message

## Provider

Uses **Resend** for reliable transactional delivery.

## Required Secrets

Set these in Firebase Secret Manager:

- `RESEND_API_KEY`
- `ADMIN_NOTIFICATION_EMAIL`
- `RESEND_FROM_EMAIL`

Commands:

```bash
firebase functions:secrets:set RESEND_API_KEY
firebase functions:secrets:set ADMIN_NOTIFICATION_EMAIL
firebase functions:secrets:set RESEND_FROM_EMAIL
```

## Deploy

From project root:

```bash
cd functions
npm install
cd ..
firebase deploy --only functions
```

## Error Handling

Email send failures are logged with `firebase-functions/logger` and do **not** block Firestore writes.
