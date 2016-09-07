/**
 * Created by Administrator on 8/28 0028.
 */
var td = new Array(),      //����ÿ�����ӵĵ���
    playing = false,       //��Ϸ�Ƿ�ʼ
    score = 0,             //����
    beat = 0,              //���������
    success = 0,           //������
    knock = 0,             //����������ͼƬ����
    countDown = 30,        //����ʱ
    interId = null,        //ָ��setInterval()�ı���
    timeId = null;         //ָ��setTimeout()�ı���

//��Ϸ����
function GameOver(){
    timeStop();
    playing = false;
    clearMouse();
    alert("��Ϸ������\n���õķ���Ϊ��"+score+"\n������Ϊ��"+success);
    success = 0;
    score = 0;
    knock = 0;
    beat = 0;
    countDown = 30;
}

//��ʾ��ǰ����ʱ��ʣʱ��
function timeShow(){
    document.form1.remtime.value = countDown;
    if(countDown == 0){
        GameOver();
        return;
    }else{
        countDown = countDown-1;
        timeId = setTimeout("timeShow()",1000);
    }
}

//����ֹͣ���м�ʱ
function timeStop(){
    clearInterval(interId);//clearInterval()��������setInterval()������id
    clearTimeout(timeId);//clearTime()��������setTimeout()��id
}

//���ѭ����ʾ����ͼƬ
function show(){
    if(playing)
    {
        var current = Math.floor(Math.random()*25);
        //�����·��Ҳ��Ҫ�����Լ���ʵ���ļ�·�����޸�
        document.getElementById("td["+current+"]").innerHTML = '<img src="1.jpg">';
        //ʹ��setTimeout()ʵ��3�����������ͼƬ
        setTimeout("document.getElementById('td["+current+"]').innerHTML=''",3000);
    }
}

//�����������ͼƬ
function clearMouse(){
    for(var i=0;i<=24;i++)
    {
        document.getElementById("td["+i+"]").innerHTML="";
    }
}

//����¼��������ж��Ƿ��������
function hit(id){
    if(playing==false)
    {
        alert("������ʼ��Ϸ");
        return;
    }
    else
    {
        beat +=1;
        if(document.getElementById("td["+id+"]").innerHTML!="")
        {
            score += 1;
            knock +=1;
            success = knock/beat;
            document.form1.success.value = success;
            document.form1.score.value = score;
            document.getElementById("td["+id+"]").innerHTML="";
        }
        else
        {
            score += -1;
            success = knock/beat;
            document.form1.success.value = success;
            document.form1.score.value = score;
        }
    }
}

//��Ϸ��ʼ
function GameStart(){
    playing = true;
    interId = setInterval("show()",1000);
    document.form1.score.value = score;
    document.form1.success.value = success;
    timeShow();
}