import './App.css'
import Modal from "./components/Modal/Modal";
import {useState} from "react";

function App() {
    const [modalActive, setModalActive] = useState(false)
    if (modalActive) {
        document.body.style.overflowY = 'hidden'
    } else {
        document.body.style.overflowY = 'scroll'
    }
    return (
        <div className='app'>
            <main>
                <button className='open-modal_btn' onClick={() => {
                    setModalActive(true)
                }}>Открыть модальное окно
                </button>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolores nisi reprehenderit?
                    Distinctio eius explicabo ipsam libero, nostrum quos? A alias aliquam commodi culpa cum deleniti,
                    dignissimos est et exercitationem fuga illum iste iure laborum libero nemo nesciunt nisi non odio
                    officiis optio porro possimus provident quaerat quam quia quisquam sint, temporibus tenetur unde
                    veritatis? Amet, asperiores cumque dicta dolores error eveniet, fugit illum magnam maiores molestias
                    mollitia officiis omnis perferendis perspiciatis placeat quaerat qui quibusdam quod rerum, soluta
                    temporibus ullam vel voluptatem voluptatibus voluptatum! Consequatur dolorem eveniet illo optio
                    porro quod reiciendis, rerum tenetur. Magnam provident reiciendis rerum ullam?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolores nisi reprehenderit?
                    Distinctio eius explicabo ipsam libero, nostrum quos? A alias aliquam commodi culpa cum deleniti,
                    dignissimos est et exercitationem fuga illum iste iure laborum libero nemo nesciunt nisi non odio
                    officiis optio porro possimus provident quaerat quam quia quisquam sint, temporibus tenetur unde
                    veritatis? Amet, asperiores cumque dicta dolores error eveniet, fugit illum magnam maiores molestias
                    mollitia officiis omnis perferendis perspiciatis placeat quaerat qui quibusdam quod rerum, soluta
                    temporibus ullam vel voluptatem voluptatibus voluptatum! Consequatur dolorem eveniet illo optio
                    porro quod reiciendis, rerum tenetur. Magnam provident reiciendis rerum ullam?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolores nisi reprehenderit?
                    Distinctio eius explicabo ipsam libero, nostrum quos? A alias aliquam commodi culpa cum deleniti,
                    dignissimos est et exercitationem fuga illum iste iure laborum libero nemo nesciunt nisi non odio
                    officiis optio porro possimus provident quaerat quam quia quisquam sint, temporibus tenetur unde
                    veritatis? Amet, asperiores cumque dicta dolores error eveniet, fugit illum magnam maiores molestias
                    mollitia officiis omnis perferendis perspiciatis placeat quaerat qui quibusdam quod rerum, soluta
                    temporibus ullam vel voluptatem voluptatibus voluptatum! Consequatur dolorem eveniet illo optio
                    porro quod reiciendis, rerum tenetur. Magnam provident reiciendis rerum ullam?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolores nisi reprehenderit?
                    Distinctio eius explicabo ipsam libero, nostrum quos? A alias aliquam commodi culpa cum deleniti,
                    dignissimos est et exercitationem fuga illum iste iure laborum libero nemo nesciunt nisi non odio
                    officiis optio porro possimus provident quaerat quam quia quisquam sint, temporibus tenetur unde
                    veritatis? Amet, asperiores cumque dicta dolores error eveniet, fugit illum magnam maiores molestias
                    mollitia officiis omnis perferendis perspiciatis placeat quaerat qui quibusdam quod rerum, soluta
                    temporibus ullam vel voluptatem voluptatibus voluptatum! Consequatur dolorem eveniet illo optio
                    porro quod reiciendis, rerum tenetur. Magnam provident reiciendis rerum ullam?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolores nisi reprehenderit?
                    Distinctio eius explicabo ipsam libero, nostrum quos? A alias aliquam commodi culpa cum deleniti,
                    dignissimos est et exercitationem fuga illum iste iure laborum libero nemo nesciunt nisi non odio
                    officiis optio porro possimus provident quaerat quam quia quisquam sint, temporibus tenetur unde
                    veritatis? Amet, asperiores cumque dicta dolores error eveniet, fugit illum magnam maiores molestias
                    mollitia officiis omnis perferendis perspiciatis placeat quaerat qui quibusdam quod rerum, soluta
                    temporibus ullam vel voluptatem voluptatibus voluptatum! Consequatur dolorem eveniet illo optio
                    porro quod reiciendis, rerum tenetur. Magnam provident reiciendis rerum ullam?</p>
            </main>
            <Modal active={modalActive} setActive={setModalActive}>
                <h3>Это модальное окно</h3>
                <hr/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci commodi, corporis dolorem ex
                    expedita fugiat hic, illum maiores necessitatibus nulla perspiciatis praesentium ratione
                    reprehenderit sequi sit suscipit vitae voluptate voluptatibus. Aliquid asperiores consequatur cum
                    cumque delectus deserunt fugit ipsum labore natus, nisi officia officiis, saepe similique sint
                    soluta, velit veniam?</p>
            </Modal>
        </div>
    )
}

export default App;