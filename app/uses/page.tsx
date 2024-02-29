import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Uses',
  description:
    "Here's what tech I'm currently using for coding, videos, and music.",
};

export default function UsesPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        here's my setup
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <h3 id="computer-office">Computer / Office</h3>
        <ul>
          <li>Potato Windows 10 15.6&quot; Lenovo Ideapad S145-15IKB i3-8130U, MX110 2GB VRAM (12GB RAM total)</li>
          <li>DareU EM901X RGB Superlight Wireless (Black)</li>
          <li>Royal Kludge RK G68 Single White Led (Black)</li>
          <li>Samsung IA500</li>
          <li>Bluetooth True Wireless Xiaomi Redmi Buds 4 Active</li>
          <li>homemade wooden desk</li>
          <li>hanoi plastic chairs</li>
        </ul>
        <h3 id="coding">Coding</h3>
        <ul>
          <li>
            Editor: VSCode
          </li>
          <li>Theme: Dracula</li>
        </ul>
      </div>
    </section>
  );
}
