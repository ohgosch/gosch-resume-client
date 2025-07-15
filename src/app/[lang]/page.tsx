import { Header } from '@/components/Header';
import { TLang } from '@/locales/i18n.config';
import { setStaticParamsLocale } from 'next-international/server';
import { getStaticParams } from '@/locales/server';

export function generateStaticParams() {
  return getStaticParams();
}

interface Props {
  params: Promise<{ lang: TLang }>;
}

export default async function Page(props: Props) {
  const params = await props.params;
  /*
   * Store's
   * */
  const { lang } = params;
  setStaticParamsLocale(lang);

  /*
   * State's
   * */

  /*
   * Memo's
   * */

  /*
   * Callback's
   * */

  /*
   * Effect's
   * */
  return (
    <div className="w-11/12 max-w-4xl m-auto py-8 flex flex-col gap-8">
      <Header />
      <ul className="flex justify-between text-base">
        <li>
          <a href="#">lorem@ipsum.com</a>
        </li>
        <div className="w-0.5 bg-neutral-800 block" />
        <li>
          <a href="#">+00 000 00000-0000</a>
        </li>
        <div className="w-0.5 bg-neutral-800 block" />
        <li>
          <a href="#">linkedin.com/in/username</a>
        </li>
        <div className="w-0.5 bg-neutral-800 block" />
        <li>
          <a href="#">github.com/username</a>
        </li>
      </ul>
      <main className="flex flex-col gap-8">
        <section>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
            dolore laboriosam minus officia sequi sit tempore voluptatibus?
            Asperiores autem cumque deleniti dolores error est eum inventore
            ipsum, itaque libero mollitia natus, omnis porro quaerat quod, quos
            sint totam veritatis! A ad amet at beatae cum cumque fuga ipsum iste
            nihil nobis non quibusdam ratione sequi suscipit temporibus, tenetur
            veniam. Accusamus accusantium aliquam architecto aut beatae dolorum
            exercitationem facilis, incidunt, labore laboriosam non nostrum,
            numquam odit placeat praesentium quas qui recusandae repudiandae
            saepe sed ullam vero voluptatem voluptatum! Accusantium aspernatur
            dolorum harum impedit maxime provident quidem repellendus
            reprehenderit, temporibus unde vero.
          </p>
        </section>
        <section className="section">
          <h2 className="section-title">Experiences</h2>
          <div className="grid gap-4">
            <article className="grid gap-3">
              <header className="flex justify-between">
                <div className="grid">
                  <h3 className="text-lg font-bold">
                    Senior Front-end Developer
                    <span className="font-normal">, Compass UOL</span>
                  </h3>
                  <span className=" text-xs text-neutral-500">
                    react • typescript • micro front-end • storybook • vite •
                    bff • ci/cd
                  </span>
                </div>
                <div className="grid">
                  <span className="text-right whitespace-nowrap">
                    2020 january - 2020 december
                  </span>
                  <span className="text-right whitespace-nowrap text-xs text-neutral-500">
                    remote, brazil
                  </span>
                </div>
              </header>
              <main className="text-base">
                <ul className="list-disc list-inside">
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ab, quo!
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ab, quo!
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ab, quo!
                  </li>
                </ul>
              </main>
            </article>

            <p className="text-base underline">+4 experiences</p>
          </div>
        </section>
        <section className="section">
          <h2 className="section-title">Education</h2>
          <div className="grid gap-4">
            <article className="grid gap-3">
              <header className="flex justify-between">
                <div className="grid">
                  <h3 className="text-lg font-bold">
                    Technician, IT
                    <span className="font-normal">, PUCRS</span>
                  </h3>
                  <span className="whitespace-nowrap">
                    2020 january - 2020 december
                  </span>
                </div>
              </header>
            </article>
          </div>
        </section>
        <section className="section">
          <h2 className="section-title">Skills</h2>
          <ul className="flex flex-wrap gap-1">
            <li className="tag">React</li>
            <li className="tag">React</li>
            <li className="tag">React</li>
            <li className="tag">React</li>
            <li className="tag">React</li>
            <li className="tag">React</li>
          </ul>
        </section>
        <section className="section">
          <h2 className="section-title">Languages</h2>
          <ul className="list-disc list-inside">
            <li className="text-base">
              <strong>English:</strong> intermediate
            </li>
            <li className="text-base">
              <strong>English:</strong> intermediate
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
