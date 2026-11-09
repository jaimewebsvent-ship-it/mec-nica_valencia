module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ ok: false });

  const { nombre, telefono, vehiculo, matricula, servicio, fecha, averia } = req.body || {};
  if (!nombre || !telefono || !vehiculo || !servicio) {
    return res.status(400).json({ ok: false, error: 'Faltan campos' });
  }

  const texto =
    `Nueva solicitud de cita\n` +
    `Nombre: ${nombre}\nTeléfono: ${telefono}\nVehículo: ${vehiculo}\n` +
    `Matrícula/año: ${matricula || '-'}\nServicio: ${servicio}\n` +
    `Fecha preferida: ${fecha || '-'}\nAvería: ${averia || '-'}`;

  try {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'Web <onboarding@resend.dev>',
        to: [process.env.EMAIL_DESTINO],
        subject: 'Nueva solicitud de cita',
        text: texto
      })
    });

    if (process.env.CALLMEBOT_KEY && process.env.WHATSAPP_NUMERO) {
      await fetch(
        `https://api.callmebot.com/whatsapp.php?phone=${process.env.WHATSAPP_NUMERO}` +
        `&text=${encodeURIComponent(texto)}&apikey=${process.env.CALLMEBOT_KEY}`
      );
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    return res.status(500).json({ ok: false });
  }
};
