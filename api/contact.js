 
export default async function handler(req, res) {
    if (req.method === "POST") {
        const { name, email, phone, subject, message } = req.body;

        // You can process the form data here (e.g., save to a database or send an email)
        console.log({ name, email, phone, subject, message });

        return res.status(200).json({ message: "Form submitted successfully!" });
    }

    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
}
