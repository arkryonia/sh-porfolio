import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  return (
    <div
      id="skills"
      className="flex flex-col items-center justify-center w-full min-h-screen px-4 py-8"
    >
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        <Card>
          <CardHeader>
            <CardTitle>Frontend</CardTitle>
            <CardContent>
              <ul className="space-y-2">
                <li>React</li>
                <li>Next.js</li>
                <li>Flutter</li>
                <li>Astro.js</li>
                <li>HTML 5</li>
                <li>CSS 3</li>
              </ul>
            </CardContent>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Backend</CardTitle>
            <CardContent>
              <ul className="space-y-2">
                <li>Node.js</li>
                <li>Express</li>
                <li>Java</li>
                <li>Spring Boot</li>Frontend
                <li>FastAPI</li>
              </ul>
            </CardContent>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Database</CardTitle>
            <CardContent>
              <ul className="space-y-2">
                <li>PostgreSQL</li>
                <li>ObjectDB</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>SQLite</li>
                <li>Redis</li>
              </ul>
            </CardContent>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default Skills;
