document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.slide-item');
    document.getElementById('slide').appendChild(lists[0]);
}

document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.slide-item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}
