import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function BlogPost({ params }: { params: { postName: string } }) {
  // TODO: Fetch the blog using blogName
  // Suspense loading with skeletons
  return (
    <section className="content-grid py-8">
      <Link href="/blog" className="flex items-center gap-2 pb-4 text-primary">
        <ChevronLeft />
        Back to Blog
      </Link>
      <h2 className="pb-8 text-3xl">BlogPost {params.postName}</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis earum
        velit voluptatem placeat minus ex voluptatibus deleniti culpa numquam
        eaque sint vel, eveniet expedita, itaque tempore doloribus mollitia
        voluptas magni voluptatum quo ipsum recusandae illum. Itaque, quam
        dolorum, cupiditate iste rem unde quod cumque minima, ab ipsam vero
        quasi eius voluptatum? Accusantium culpa facilis nostrum enim ipsum
        voluptatum est laborum. Vel tenetur minima ea tempora rerum obcaecati
        doloribus quaerat enim nulla! Deleniti modi suscipit nisi iusto. Harum
        debitis quae ipsa. Commodi a sint, expedita nobis quam libero pariatur
        corporis veniam, vero ratione eveniet minima ipsam! Placeat repudiandae
        fugit nam voluptates odio quas doloribus numquam dolore exercitationem,
        esse cupiditate neque consequatur sunt mollitia libero provident eos
        error nihil assumenda tempore explicabo nesciunt minus quos illo. Quo
        nemo perspiciatis placeat ea minima eius nesciunt, ducimus delectus,
        explicabo quos repudiandae alias laudantium vitae fugiat quasi facilis
        enim harum quam? Expedita sapiente vero quam.
      </p>
      <p className="">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore cum
        doloribus consequatur rerum? Dolores itaque tempore explicabo autem
        nobis, alias tempora cupiditate consequatur, assumenda quam aliquam eum
        consequuntur suscipit architecto neque! Facilis maiores doloribus
        blanditiis, dicta vel accusamus reprehenderit velit nihil earum repellat
        tempore quidem dolor eligendi exercitationem corporis rem qui excepturi
        quos! Eaque esse magni, quam debitis quidem ipsa non suscipit fugit
        provident velit repudiandae vel architecto saepe asperiores at totam
        officia molestiae voluptates placeat ex similique libero enim? At neque
        aut aspernatur autem, ratione repudiandae optio! Sint deleniti error
        alias accusamus at reiciendis? Repellendus distinctio, recusandae
        veritatis repellat atque nam fuga hic, vel perspiciatis quo laboriosam.
        Molestias quos facilis blanditiis necessitatibus, autem sunt explicabo
        nobis eaque sit natus debitis harum amet ut atque. Obcaecati, itaque
        mollitia ullam molestiae nisi cumque ad fuga ratione eius et eaque ea
        magnam voluptatibus, distinctio impedit rerum excepturi? Quo maiores
        autem temporibus voluptates quis nulla est eligendi tempore voluptatum
        qui. Ratione explicabo, perferendis dicta consequatur cupiditate impedit
        nobis ea similique ad sit reiciendis, rerum, a sapiente ipsa consectetur
        qui temporibus odit! Placeat labore consequatur veritatis facilis
        excepturi autem. Rerum facere ipsum voluptatum dolorem, sequi odio
        perspiciatis natus corporis, repellendus esse quasi, dolore totam.
      </p>
    </section>
  );
}
