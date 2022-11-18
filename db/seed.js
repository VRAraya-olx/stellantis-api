const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  const victor = await prisma.user.upsert({
    where: { email: 'victor@olxautos.com' },
    update: {},
    create: {
      email: 'victor.araya@olxautos.com',
      name: 'Victor Eduardo',
      lastname: 'Araya Romero',
      role: 'admin',
      cms_user_id: '0495cb22-0e9f-4b34-928e-9876e2577f9e',
      password: '$2b$10$6tRrtNdImHSVuX2pG8sm/uLTh9TxsrsBNpR9fUlcc1oNsNQ9UaYLS',
      first_logged_in: false,
      created_at: new Date(),
      updated_at: new Date(),
    },
  })

  const user_client1 = await prisma.user.upsert({
    where: { email: 'client1@asd.com' },
    update: {},
    create: {
      email: 'client1@asd.com',
      name: 'Client 1',
      lastname: 'Asd',
      role: 'client',
      password: '$2b$10$firFpEhuZ1wEdIA8KuZni.8lZV4n3LxZ94SjddK3JQOyQpQwNWBm6',
      first_logged_in: false,
      created_at: new Date(),
      updated_at: new Date(),
    },
  })

  const client1 = await prisma.client.upsert({
    where: { dni: '123456-7' },
    update: {},
    create: {
      user_id: 2,
      dni: '123456-7',
      phone: '+5491112345678',
      created_at: new Date(),
      updated_at: new Date(),
    },
  })

  const adviser1 = await prisma.user.upsert({
    where: { dni: "adviser.1@olxautos.com" },
    update: {},
    create: {
      email: 'adviser.1@olxautos.com',
      name: 'adviser',
      lastname: '1',
      role: 'adviser',
      password: '$2b$10$RqvQbH1M6ieFmHgp6vJxmuuPMB4fyPoglJrJ5eVWeZLoMgyBGcr32',
      first_logged_in: false,
    },
  })

  const debt1 = await prisma.debt.upsert({
    where: { id: 1 },
    update: {},
    create: {
      client_id: 1,
      terms_conditions: '0',
      estimated_debt: 10000000,
      date_appointment: new Date('2022-11-01'),
      adviser_id: 3,
      proposed_amount: 9800000,
      accept_offer: '0',
      accept_stellantis: '0',
    },
  })

  const step1 = await prisma.history_steps.upsert({
    where: { id: 1 },
    update: {},
    create: {
      debt_id: 1,
      step: 'Enviado correo al cliente',
      description: 'para que lea términos y condiciones',
      value: 'enviado',
    },
  })

  const step2 = await prisma.history_steps.upsert({
    where: { id: 2 },
    update: {},
    create: {
      debt_id: 1,
      step: 'Enviado correo al cliente',
      description: 'para que lea términos y condiciones',
      value: 'aceptado',
    },
  })

  const step3 = await prisma.history_steps.upsert({
    where: { id: 3 },
    update: {},
    create: {
      debt_id: 1,
      step: 'Enviado v2 al cliente',
      description: 'esperando respuesta',
      value: 'espera',
    },
  })

  const step4 = await prisma.history_steps.upsert({
    where: { id: 4 },
    update: {},
    create: {
      debt_id: 1,
      step: 'Notificación al cliente sobre la aceptación de la propuesta',
      description: 'notificación sobre precio',
      value: 'esperando respuesta',
    },
  })

  const step5 = await prisma.history_steps.upsert({
    where: { id: 5 },
    update: {},
    create: {
      debt_id: 1,
      step: 'Notificación al cliente sobre la aceptación de la propuesta',
      description: 'notificación sobre precio',
      value: 'aceptado',
    },
  })

  console.log({ 
    victor, 
    user_client1, 
    client1,
    adviser1, 
    debt1, 
    step1, 
    step2, 
    step3, 
    step4, 
    step5
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })