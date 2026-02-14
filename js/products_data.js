const products = [
    {
        id: "filtro-antisarro",
        name: "Filtro Antisarro para calefón y calderas (Vigahome)",
        priceBase: 39990,
        priceFinal: 46990,
        images: [
            "https://media.falabella.com/falabellaCL/116277694_01/w=1500,h=1500,fit=pad",
            "https://media.falabella.com/falabellaCL/116277694_02/w=1500,h=1500,fit=pad",
            "https://media.falabella.com/falabellaCL/116277694_05/w=1500,h=1500,fit=pad"
        ],
        description: `
            <p>Protege tus artefactos y cañerías del sarro con el Filtro Antisarro Vigahome. Ideal para calefones y calderas.</p>
            <ul>
                <li>Previene sarro hasta 500ppm (polifosfato)</li>
                <li>Conexión HI 1/2" (agua fría)</li>
                <li>Recargable: cristales duran aprox 6 meses</li>
                <li>Incluye carga inicial de polifosfato</li>
                <li>Presión máxima de trabajo: 125 PSI</li>
                <li>Temperatura máxima: 35°C</li>
            </ul>
        `,
        specsShort: "Previene sarro, Conexión HI 1/2, Recargable"
    },
    {
        id: "sifon-flexible",
        name: "Sifón Flexible Extensible Universal Lavabo (Trampa Antiodor)",
        priceBase: 0,
        priceFinal: "Consultar",
        images: [
            "https://media.falabella.com/falabellaCL/144381709_04/w=1500,h=1500,fit=pad",
            "https://media.falabella.com/falabellaCL/144381709_02/w=1500,h=1500,fit=pad",
            "https://media.falabella.com/falabellaCL/144381709_01/w=1500,h=1500,fit=pad"
        ],
        description: `
            <p>Solución práctica y rápida para desagües de lavamanos. Se adapta a diferentes espacios gracias a su diseño flexible.</p>
            <ul>
                <li>Anti-olor y flexible extensible</li>
                <li>Para tubería 40–50mm (junta silicona)</li>
                <li>Fácil instalación sin herramientas</li>
                <li>Material resistente a productos químicos domésticos</li>
                <li>Rejilla de acero inoxidable incluida</li>
            </ul>
        `,
        specsShort: "Anti-olor, Ajustable 40-50mm, Fácil instalación"
    },
    {
        id: "caneria-cobre",
        name: "Cañería Cobre Agua 1/2\" x 3 m",
        priceBase: 0,
        priceFinal: "Consultar",
        images: [
            "https://media.falabella.com/sodimacCL/5604575_001/w=1500,h=1500,fit=pad",
            "https://media.falabella.com/sodimacCL/5604575_21/w=1500,h=1500,fit=pad",
            "https://media.falabella.com/sodimacCL/5604575_26/w=1500,h=1500,fit=pad"
        ],
        description: `
            <p>Cañería de cobre tipo L para instalaciones de agua potable, gas y calefacción.</p>
            <ul>
                <li>Cobre alta durabilidad y resistencia a la corrosión</li>
                <li>Largo: 3 metros</li>
                <li>Diámetro nominal: 1/2 pulgada</li>
                <li>Certificada para uso sanitario</li>
                <li>Superficie lisa que evita incrustaciones</li>
            </ul>
        `,
        specsShort: "Cobre alta durabilidad, Largo 3m, Diámetro 1/2\""
    },
    {
        id: "tubo-pvc",
        name: "Tubo Gris PVC Agua 110 mm x 6 m (Hoffens)",
        priceBase: 13990,
        priceFinal: 20990,
        images: [
            "https://media.falabella.com/sodimacCL/7591039_01/w=1500,h=1500,fit=pad",
            "https://media.falabella.com/sodimacCL/7591039_21/w=1500,h=1500,fit=pad"
        ],
        description: `
            <p>Tubería sanitaria de PVC gris para evacuación de aguas servidas.</p>
            <ul>
                <li>Diámetro: 110mm</li>
                <li>Largo: 6 metros</li>
                <li>Conexión: Cementar (Pegar)</li>
                <li>Clase: sanitaria</li>
                <li>Marca: Hoffens (o equivalente calidad)</li>
            </ul>
        `,
        specsShort: "PVC 110mm, Largo 6m, Conexión cementar"
    },
    {
        id: "destapador-passol",
        name: "Destapador de cañerías 700 gr (DesBlock Passol)",
        priceBase: 3990,
        priceFinal: 10990,
        images: [
            "https://media.falabella.com/sodimacCL/1052055_01/w=1500,h=1500,fit=pad",
            "https://media.falabella.com/sodimacCL/1052055_26/w=1500,h=1500,fit=pad"
        ],
        description: `
            <p>Soda cáustica granulada de alta pureza y poder para destapar cañerías obstruidas.</p>
            <ul>
                <li>Formato: Granulado 700gr</li>
                <li>Uso: Baños, cocinas, desagües</li>
                <li>Doble acción: Destapa y limpia</li>
                <li>Disuelve grasas, cabellos y restos orgánicos</li>
                <li>Producto corrosivo, usar con precaución</li>
            </ul>
        `,
        specsShort: "Granulado 700gr, Baños/Cocina, Doble acción"
    },
    {
        id: "desague-rejilla",
        name: "Desagüe con rejilla inox + válvula check anti olor",
        priceBase: 6990,
        priceFinal: 13990,
        images: [
            "https://media.falabella.com/sodimacCL/7394365_01/w=1500,h=1500,fit=pad",
            "https://media.falabella.com/sodimacCL/7394365_17/w=1500,h=1500,fit=pad"
        ],
        description: `
            <p>Desagüe de piso con sistema inteligente para bloquear malos olores e insectos.</p>
            <ul>
                <li>Rejilla de acero inoxidable de alta calidad</li>
                <li>Válvula check anti-olor incorporada</li>
                <li>Dimensiones: 10x10 cm</li>
                <li>Fácil limpieza</li>
                <li>Evita el retorno de espuma</li>
            </ul>
        `,
        specsShort: "Rejilla Inox, Válvula anti-olor, 10x10cm"
    },
    {
        id: "llave-jardin",
        name: "Llave de jardín doble salida 1/2\"",
        priceBase: 11990,
        priceFinal: 18990,
        images: [
            "https://media.falabella.com/falabellaCL/110084847_02/w=1500,h=1500,fit=pad",
            "https://media.falabella.com/falabellaCL/110084847_01/w=1500,h=1500,fit=pad"
        ],
        description: `
            <p>Llave de jardín práctica que permite conectar una manguera y tener un chorro libre simultáneamente.</p>
            <ul>
                <li>Material: Latón resistente a la corrosión</li>
                <li>Entrada: 1/2" HE</li>
                <li>Salidas: Dos salidas de 3/4" HE (una con conexión rápida opcional)</li>
                <li>Manillas independientes de 1/4 de vuelta</li>
                <li>Ideal para lavadoras, riego y jardín</li>
            </ul>
        `,
        specsShort: "Latón resistente, Doble salida, Entrada 1/2\""
    },
    {
        id: "kit-regulador-gas",
        name: "Kit Regulador Gas Licuado + Manguera 3/8\" 1/2\" HI",
        priceBase: 18391,
        priceFinal: 25391,
        images: [
            "https://media.falabella.com/sodimacCL/1643878_01/w=1500,h=1500,fit=pad",
            "https://media.falabella.com/sodimacCL/1643878_21/w=1500,h=1500,fit=pad",
            "https://media.falabella.com/sodimacCL/1643878_22/w=1500,h=1500,fit=pad"
        ],
        description: `
            <p>Kit completo para conexión segura de artefactos a gas licuado (balones de 5, 11 y 15kg).</p>
            <ul>
                <li>Certificado SEC</li>
                <li>Incluye regulador con válvula de seguridad</li>
                <li>Flexible roscado con conexiones 3/8" y 1/2"</li>
                <li>Largo manguera: Según norma</li>
                <li>Mayor seguridad y control de presión constante</li>
            </ul>
        `,
        specsShort: "Gas licuado, Flexible 3/8\" y 1/2\", Certificado SEC"
    },
    {
        id: "gancho-destapador",
        name: "Gancho Multifuncional Destapador (85 cm)",
        priceBase: 22000,
        priceFinal: 29000,
        images: [
            "https://media.falabella.com/falabellaCL/143662742_01/w=1500,h=1500,fit=pad",
            "https://media.falabella.com/falabellaCL/143662742_02/w=1500,h=1500,fit=pad",
            "https://media.falabella.com/falabellaCL/143662742_04/w=1500,h=1500,fit=pad"
        ],
        description: `
            <p>Herramienta flexible tipo garra para recuperar objetos y destapar tuberías difícil alcance.</p>
            <ul>
                <li>Largo: 85 cm</li>
                <li>Sistema de garra retráctil operada por resorte</li>
                <li>Material flexible para curvas de tuberías</li>
                <li>Ideal para recuperar joyas, limpiar sifones y destapar desagües de ducha</li>
                <li>Mango ergonómico</li>
            </ul>
        `,
        specsShort: "Largo 85cm, Garra retráctil, Flexible"
    },
    {
        id: "calefont-master-7l",
        name: "Calefont Master 7 L Gas Licuado Tiro Natural Ionizado (Splendid)",
        priceBase: 129990,
        priceFinal: 136990,
        images: [
            "https://www.construmart.cl/media/catalog/product/c/a/calefont-master-7-l-gas-licuado-tiro-natural-ioniz-95120-6_y30ru0mubxz7lekb.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",
            "https://www.construmart.cl/media/catalog/product/c/a/calefont-master-7-l-gas-licuado-tiro-natural-ioniz-95120-1_nqzelmigdndgbkep.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700"
        ],
        description: `
             <p>Calefont ionizado de 7 litros, diseñado para brindar agua caliente constante con máxima seguridad.</p>
             <ul>
                 <li>7 litros, gas licuado, tiro natural</li>
                 <li>Encendido automático ionizado (sin llama piloto)</li>
                 <li>Certificación SEC–CESMEC</li>
                 <li>Doble control de temperatura (agua/gas)</li>
                 <li>Incluye flexibles de agua 200mm</li>
                 <li>Display digital de temperatura</li>
                 <li>Sensor de revoco de gases</li>
             </ul>
        `,
        specsShort: "7 litros, Gas licuado, Tiro natural, Ionizado"
    },
    {
        id: "calefont-master-5l",
        name: "Calefont Master 5 L Gas Licuado Tiro Natural (Splendid)",
        priceBase: 109990,
        priceFinal: 116990,
        images: [
            "https://www.construmart.cl/media/catalog/product/c/a/calefont-master-5-l-gas-licuado-tiro-natural-ioniz-76103-1_5zorupccdr4yrxrg.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",
            "https://www.construmart.cl/media/catalog/product/c/a/calefont-master-5-l-gas-licuado-tiro-natural-ioniz-76103-5_p4uzxzjzxwaa0zxi.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700"
        ],
        description: `
             <p>Calefont compacto de 5 litros, ideal para espacios reducidos o departamentos pequeños.</p>
             <ul>
                 <li>5 litros, gas licuado, tiro natural</li>
                 <li>Encendido automático ionizado (pilas)</li>
                 <li>Certificación SEC–CESMEC</li>
                 <li>Doble control temperatura agua/gas</li>
                 <li>Serpentín de cobre reforzado (baño de estaño)</li>
                 <li>Válvula de poliamida de alta resistencia</li>
             </ul>
        `,
        specsShort: "5 litros, Gas licuado, Tiro natural, Ionizado"
    },
    {
        id: "control-presion-bestflow",
        name: "Control Electrónico de Presión 1\" 1,5 HP (Bestflow)",
        priceBase: 25190,
        priceFinal: 32190,
        images: [
            "https://www.construmart.cl/media/catalog/product/c/o/control-electronico-de-presion-1-15-hp-223725-1_0zu7fb4zf8xjrogb.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",
            "https://www.construmart.cl/media/catalog/product/c/o/control-electronico-de-presion-1-15-hp-223725-2_srddgbbpecmd0fe3.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",
            "https://www.construmart.cl/media/catalog/product/c/o/control-electronico-de-presion-1-15-hp-223725-3_fbpbuf1l3asmrd7g.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700"
        ],
        description: `
             <p>Dispositivo inteligente para automatizar el suministro de agua. Reemplaza al sistema hidroneumático tradicional.</p>
             <ul>
                 <li>Automatiza bombas (abre/cierra llaves)</li>
                 <li>Voltaje: 220V, Potencia máx: 1.5 HP</li>
                 <li>Caudal máximo: 125 l/min</li>
                 <li>Conexión 1", incluye manómetro integrado</li>
                 <li>Protege la bomba ante falta de agua (corte automático)</li>
                 <li>Presión de partida ajustable</li>
             </ul>
        `,
        specsShort: "Automatiza bombas, 1.5 HP, Conexión 1\", Protege bomba"
    },
    {
        id: "caneria-polietileno-rollo",
        name: "Cañería Polietileno 3/4\" Rollo 100 m (Hoffens)",
        priceBase: 48090,
        priceFinal: 55090,
        images: [
            "https://www.construmart.cl/media/catalog/product/c/a/caneria-polietileno-34-rollo-100-m-236740-1_x7ejx4aobuvapnxh.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700"
        ],
        description: `
             <p>Tubería flexible de polietileno (Planasa normal), ideal para conducción de fluidos a baja presión.</p>
             <ul>
                 <li>Formato: Rollo 100 metros</li>
                 <li>Diámetro: 3/4"</li>
                 <li>Para fluidos fríos a baja presión</li>
                 <li>Flexible y resistente a corrosión</li>
                 <li>Ideal riego, conducción de agua y gasfitería general</li>
                 <li>Material virgen de alta calidad</li>
             </ul>
        `,
        specsShort: "Rollo 100m, 3/4\", Riego/Agua, Flexible"
    },
    {
        id: "gabinete-calefont",
        name: "Gabinete Galvanizado Para Calefont 11 a 13 L (Coyahue)",
        priceBase: 67200,
        priceFinal: 74200,
        images: [
            "https://www.construmart.cl/media/catalog/product/g/a/gabinete-galvanizado-para-calefont-11-a-13-l-227289-2_mdhxix0hxakqmnds.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",
            "https://www.construmart.cl/media/catalog/product/g/a/gabinete-galvanizado-para-calefont-11-a-13-l-227289-1_uhjnnqtfhtjltqtn.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700"
        ],
        description: `
             <p>Protege tu calefont de la intemperie, lluvia y viento con este gabinete metálico resistente.</p>
             <ul>
                 <li>Compatible con calefon de 11 a 13 litros</li>
                 <li>Material: Acero galvanizado (protección exterior)</li>
                 <li>Uso exterior y condiciones climáticas adversas</li>
                 <li>Incluye puerta con celosía para ventilación</li>
                 <li>Fácil instalación mural</li>
             </ul>
        `,
        specsShort: "Para 11-13L, Acero Galvanizado, Uso Exterior"
    },
    {
        id: "codo-galvanizado",
        name: "Codo Galvanizado 4 1/2\" 45° (Coyahue)",
        priceBase: 13990,
        priceFinal: 20990,
        images: [
            "https://www.construmart.cl/media/catalog/product/c/o/codo-galvanizado-4-12-45-coyahue-227295-1_kk91uflsfvfkcmg0.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",
            "https://www.construmart.cl/media/catalog/product/c/o/codo-galvanizado-4-12-45-coyahue-227295-2_ayhsh5xa6tlyzjni.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700"
        ],
        description: `
             <p>Accesorio indispensable para ductos de ventilación y evacuación de gases.</p>
             <ul>
                 <li>Diámetro: 4 1/2"</li>
                 <li>Ángulo: 45°</li>
                 <li>Uso: Ventilación, Aire Acondicionado, Calefont, Extractores</li>
                 <li>Material: Acero galvanizado</li>
                 <li>Espesor: 0,8mm (alta durabilidad)</li>
                 <li>Resistente a la corrosión</li>
             </ul>
        `,
        specsShort: "4 1/2 pulgadas, 45°, Acero Galvanizado"
    },
    {
        id: "teflon-liquido",
        name: "Teflón Líquido 50 ml (Corsovalv)",
        priceBase: 11190,
        priceFinal: 18190,
        images: [
            "https://www.construmart.cl/media/catalog/product/t/e/teflon-liquido-50-ml-238577-2_esz2phwitpyrupre.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700",
            "https://www.construmart.cl/media/catalog/product/t/e/teflon-liquido-50-ml-238577-1_nwlyvt9vx4pndzxs.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700"
        ],
        description: `
             <p>Sellador anaeróbico para roscas metálicas, reemplaza a la cinta teflón tradicional.</p>
             <ul>
                 <li>Contenido: 50 ml</li>
                 <li>Sellado de roscas (resistencia media)</li>
                 <li>Reduce fricción durante el apriete</li>
                 <li>Ayuda contra la corrosión en las uniones</li>
                 <li>Resiste vibraciones y cambios de temperatura</li>
                 <li>Ideal para instalaciones de gas y agua</li>
             </ul>
        `,
        specsShort: "50 ml, Sellado Roscas, Anti-corrosión"
    },
    {
        id: "llave-paso-soldar",
        name: "Llave de Paso a Soldar SO–SO 1/2\" Alfa",
        priceBase: 10390,
        priceFinal: 17390,
        images: [
            "https://www.construmart.cl/media/catalog/product/l/l/llave-de-paso-a-soldar-so-so-12-alfa-244631-1_yxhq3jl4fpa4ruks.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700"
        ],
        description: `
             <p>Válvula de corte para instalaciones de cobre, garantiza un cierre seguro.</p>
             <ul>
                 <li>Medida: 1/2"</li>
                 <li>Conexión: Para soldar en cobre (SO-SO)</li>
                 <li>Uso: Control flujo agua/gas (según norma de instalación)</li>
                 <li>Material: Cuerpo y vástago en latón de alta calidad</li>
                 <li>Presión nominal: PN10</li>
                 <li>Rango temperatura: 0°C – 90°C</li>
             </ul>
        `,
        specsShort: "1/2\", Soldar, Latón, Agua/Gas"
    },
    {
        id: "flexible-agua-inox",
        name: "Flexible de Agua HE–HI 1/2\" 40 cm Inox (Piazza)",
        priceBase: 4290,
        priceFinal: 11290,
        images: [
            "https://www.construmart.cl/media/catalog/product/f/l/flexible-de-agua-he-hi-12-40-cm-inox-lavaplatolava-229550-1_lawlevzjoo6xvguo.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700"
        ],
        description: `
             <p>Conexión flexible segura para artefactos sanitarios.</p>
             <ul>
                 <li>Largo: 40 cm</li>
                 <li>Conexiones: 1/2" HE - 1/2" HI</li>
                 <li>Material: Malla de acero inoxidable</li>
                 <li>Uso: Lavaplatos, lavamanos, WC</li>
                 <li>Resistente a la corrosión y alta presión</li>
                 <li>Instalación fácil en espacios reducidos</li>
             </ul>
        `,
        specsShort: "40 cm, Inox, 1/2\" HE-HI, Lavaplatos/Baño"
    },
    {
        id: "pack-embolos",
        name: "Pack 3 Émbolos Pequeños para Lavamanos y Fregaderos",
        priceBase: 37990,
        priceFinal: 44990,
        images: [
            "https://media.falabella.com/falabellaCL/143638842_05/w=1500,h=1500,fit=pad",
            "https://media.falabella.com/falabellaCL/143638842_04/w=1500,h=1500,fit=pad",
            "https://media.falabella.com/falabellaCL/143638842_01/w=1500,h=1500,fit=pad"
        ],
        description: `
             <p>Set de sopapos de goma de alta succión para destapes domésticos rápidos.</p>
             <ul>
                 <li>Pack x3 unidades</li>
                 <li>Despeja obstrucciones sin necesidad de químicos</li>
                 <li>Cabeza de goma durable y flexible</li>
                 <li>Mango ergonómico corto para espacios reducidos</li>
                 <li>Ideal lavamanos, fregaderos y duchas</li>
             </ul>
        `,
        specsShort: "Pack x3, Sin químicos, Ideal Lavamanos"
    }
];

if (typeof window !== 'undefined') {
    window.products = products;
}
